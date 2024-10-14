import { Context, Schema, h } from 'koishi'
import crypto from 'crypto'
import { guessStudent } from './student'
import { anotherName } from './anotherName'
export const name = 'smmcat-baaudio'


export interface Config {
  includeJpname: boolean
  cnVoice: boolean
  jpVoice: boolean
  showAvatar: boolean
  showVoiceText: boolean
  useAnotherName: boolean
  useThrottle: number
}

export const Config: Schema<Config> = Schema.object({
  includeJpname: Schema.boolean().default(false).description("包含日语名的匹配 (扩大搜索范围)"),
  cnVoice: Schema.boolean().default(true).description("中文音频收录"),
  jpVoice: Schema.boolean().default(true).description("日文音频收录"),
  showAvatar: Schema.boolean().default(true).description("显示学生头像"),
  showVoiceText: Schema.boolean().default(true).description("显示学生语音文本"),
  useAnotherName: Schema.boolean().default(true).description("启用别名匹配 (尝试性! 我不太懂鸡窝托斯(划掉))"),
  useThrottle: Schema.number().default(10000).description("使用的冷却时间"),
})

export function apply(ctx: Context, config: Config) {
  /** 学生信息列表 */
  type resultStudentItem = {
    id: number;
    skin: string;
    skin_cn: string;
    family_name: string;
    given_name: string;
    family_name_jp: string;
    given_name_jp: string;
    family_name_cn: string;
    given_name_cn: string;
    avatar: string;
    school: number;
    main_relation: number;
  }
  /** 学生音频列表 */
  type studentVoiceItem = {
    description: string;
    category: string;
    text: string;
    text_original: string;
    file: string;
  }

  /** 学生整理信息 */
  type studentTempItem = {
    voice: { voiceList?: studentVoiceItem, voiceCnList?: studentVoiceItem }
    avatarList: studentAvatarList | null,
    studentNameList: string[]
  }

  /** 学生头像列表 */
  type studentAvatarList = string[]

  const baaudio = {
    queryDict: {}, // 学生字典
    tempDetail: {}, // 请求缓存
    /** 初始化学生档案列表 */
    async initData() {
      try {
        const res = await ctx.http.get('https://api.kivo.wiki/api/v1/data/students/?page=1&page_size=500')
        if (res.code !== 2000) return console.log("学生列表数据请求失败");
        const temp = {}
        res.data.students.forEach((item: resultStudentItem) => {
          if (item.given_name_cn) {
            if (item.family_name_cn) {
              if (!temp[item.family_name_cn + item.given_name_cn]) {
                temp[item.family_name_cn + item.given_name_cn] = []
              }
              temp[item.family_name_cn + item.given_name_cn].includes(item.id) || temp[item.family_name_cn + item.given_name_cn].push(item.id)
            }
            if (!temp[item.given_name_cn]) {
              temp[item.given_name_cn] = []
            }
            temp[item.given_name_cn].push(item.id)
          }
          // 是否收录日语名 数量会增加较多
          if (config.includeJpname) {
            if (item.given_name) {
              if (item.family_name) {
                if (!temp[item.family_name + item.given_name]) {
                  temp[item.family_name + item.given_name] = []
                }
                temp[item.family_name + item.given_name].includes(item.id) || temp[item.family_name + item.given_name].push(item.id)
              }
              if (!temp[item.given_name]) {
                temp[item.given_name] = []
              }
              temp[item.given_name].includes(item.id) || temp[item.given_name].push(item.id)
            }
            if (item.given_name_jp) {
              if (item.family_name_jp) {
                if (!temp[item.family_name_jp + item.given_name_jp]) {
                  temp[item.family_name_jp + item.given_name_jp] = []
                }
                temp[item.family_name_jp + item.given_name_jp].includes(item.id) || temp[item.family_name_jp + item.given_name_jp].push(item.id)
              }
              if (!temp[item.given_name_jp]) {
                temp[item.given_name_jp] = []
              }
              temp[item.given_name_jp].includes(item.id) || temp[item.given_name_jp].push(item.id)
            }
          }
        })
        this.queryDict = temp
      } catch (error) {
        console.log(error);
      }
    },
    /** 通过学生姓名查找 id */
    getStudentIdByName(name: string) {
      if (this.queryDict[name]) {
        return this.queryDict[name][tool.random(this.queryDict[name].length)]
      }
      return null
    },
    /** 获取学生信息数据 */
    async getStudentDetail(id: number) {
      try {
        if (!id) return
        if (this.tempDetail[id]) {
          return { code: true, data: this.randomItem(this.tempDetail[id]) }
        }
        const res = await ctx.http.get('https://api.kivo.wiki/api/v1/data/students/' + id)
        if (res.code !== 2000) return { code: false, msg: '学生不存在' }
        const voiceList: studentVoiceItem[] | null = res.data.voice || null
        const voiceCnList: studentVoiceItem[] | null = res.data.voice_cn || null
        const avatarmap = res.data.gallery.find((item: { title: string, images: string[] }) => item.title === "初始立绘差分")
        const avatarList: studentAvatarList | null = avatarmap?.images || null
        const nameList = []
        nameList.push(res.data.given_name)
        nameList.push(res.data.family_name + res.data.given_name)
        nameList.push(res.data.given_name_jp)
        nameList.push(res.data.family_name_jp + res.data.given_name_jp)
        nameList.push(res.data.given_name_cn)
        nameList.push(res.data.family_name_cn + res.data.given_name_cn)
        res.data.nick_name && nameList.push(...res.data.nick_name.split('，'))
        const studentNameList: string[] = nameList
        const temp = {
          voice: {
            voiceList,
            voiceCnList
          },
          avatarList,
          studentNameList
        }
        this.tempDetail[id] = temp
        return { code: true, data: this.randomItem(temp) }
      } catch (error) {
        console.log(error);
        return { code: false, msg: '服务器问题或未知错误' }
      }
    },
    /** 随机抽取 内容发送 */
    randomItem(data: studentTempItem) {
      const setVoiceMap = [{ 'voiceCnList': config.cnVoice }, { 'voiceList': config.jpVoice }].map((item) => {
        if (Object.values(item)[0]) {
          return Object.keys(item)[0]
        }
        return null
      }).filter(item => item)
      if (setVoiceMap.length) {
        let allVoice = []
        setVoiceMap.forEach((item) => {
          allVoice.push(...data.voice[item])
        })
        const voiceInfo: studentVoiceItem | null = allVoice.length ? allVoice[tool.random(allVoice.length)] : null
        const avatar: string | null = data.avatarList?.length ? data.avatarList[tool.random(data.avatarList.length)] : null
        return { voiceInfo, avatar, nameList: data.studentNameList }
      }

    }
  }

  const tool = {
    // 获取指定范围的真随机数
    random(max: number): number {
      const randomBuffer: Buffer = crypto.randomBytes(4);
      const randomNumber: number = randomBuffer.readUInt32LE(0) / 0x100000000;
      return Math.floor(randomNumber * max);
    }
  }

  ctx.on('ready', () => {
    baaudio.initData()
  })

  const throttle = {
    userList: {},
    isTimePass(userId) {
      const time = +new Date
      if (time - (this.userList[userId] || 0) > config.useThrottle) {
        this.userList[userId] = time
        return true
      } else {
        return false
      }
    }
  }

  ctx
    .command('猜学生')
    .action(async ({ session }) => {
      await session.send('那么就开始猜学生了。请听一段语音，猜猜她是哪个学生！\n（30秒内/3次机会）')
      const romStudent = guessStudent.dict[tool.random(guessStudent.dict.length)]
      const res = await baaudio.getStudentDetail(romStudent.id)
      const nameList = res.data.nameList
      const resultVoiceMsg = res.data.voiceInfo ? h.audio('https:' + res.data.voiceInfo.file) : ''
      const resultVoiceTextMsg = res.data.voiceInfo && config.showVoiceText ? res.data.voiceInfo.text : ''
      await session.send(resultVoiceMsg)
      await session.send(resultVoiceTextMsg)
      let time = 30000
      let proce = 0
      const timer = ctx.setInterval(() => {
        if (time <= 0) {
          timer()
        }
        time -= 1000
      }, 1000)
      while (true) {
        if (time <= 0 || proce == 3) {
          if (proce == 3) {
            const errorMsg = romStudent.error[tool.random(romStudent.error.length)]
            await session.send(
              h.image(errorMsg.avatar[tool.random(errorMsg.avatar.length)]) + '\n[lose]\n' +
              errorMsg.msg[tool.random(errorMsg.msg.length)]
            )
          }
          timer()
          break;
        }
        const msg = await session.prompt(time)
        if (msg === undefined) {
          timer()
          await session.send('没有继续吗，结束了')
          break;
        }
        proce++
        if (nameList.includes(msg)) {
          await session.send(`恭喜答对了！正确答案：${msg}`)
          const successMsg = romStudent.success[tool.random(romStudent.success.length)]
          await session.send(
            h.image(successMsg.avatar[tool.random(successMsg.avatar.length)]) + '\n[win!]\n' +
            successMsg.msg[tool.random(successMsg.msg.length)]
          )
          timer()
          break;
        } else {
          proce < 3 && await session.send(`名字不对哦，再试试\n距离结束还有：${Math.floor(time / 1000)} 秒,${3 - proce} 次尝试`)
        }
      }
    })

  ctx.middleware(async (session, next) => {
    const msg = h.select(session.elements, 'text').map(item => item.attrs.content)[0]?.trim()

    if (!msg || !msg.endsWith("说")) {
      return next()
    }

    const studentName = msg.slice(0, -1)
    const id = baaudio.getStudentIdByName(studentName) || config.useAnotherName && anotherName[studentName] && anotherName[studentName][tool.random(anotherName[studentName].length)]

    if (!id) return next()

    if (!throttle.isTimePass(session.userId)) {
      await session.send('您呼唤学生的次数太频繁了，请稍后再试试...')
      return next()
    }
    const res = await baaudio.getStudentDetail(id)

    if (!res.code) return next()
    const resultAvatarMsg = res.data.avatar && config.showAvatar ? h.image('https:' + res.data.avatar) : ''
    const resultVoiceMsg = res.data.voiceInfo ? h.audio('https:' + res.data.voiceInfo.file) : ''
    const resultVoiceTextMsg = res.data.voiceInfo && config.showVoiceText ? res.data.voiceInfo.text : ''

    await session.send(resultAvatarMsg + resultVoiceTextMsg)
    await session.send(resultVoiceMsg)
    return next()
  })
}

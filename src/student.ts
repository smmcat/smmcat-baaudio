type GuessDict = {
    dict: GuessStudentItem[]
}

type GuessStudentItem = {
    id: number,
    success: { avatar: string[], msg: string[] }[]
    error: { avatar: string[], msg: string[] }[]
}

export const guessStudent: GuessDict = {
    dict: [
        {
            id: 112, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E9%99%86%E5%85%AB%E9%AD%94%20%E9%98%BF%E9%9C%B2/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211115183327.png?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E9%99%86%E5%85%AB%E9%AD%94%20%E9%98%BF%E9%9C%B2/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211115183231.png?x-oss-process=image/resize,h_130"],
                    msg: ["真不愧是我的合作伙伴！果然是知道的", "太好了老师，很可靠呢", '这也是社长的工作嗯']
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E9%99%86%E5%85%AB%E9%AD%94%20%E9%98%BF%E9%9C%B2/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211115183237.png?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E9%99%86%E5%85%AB%E9%AD%94%20%E9%98%BF%E9%9C%B2/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211115183209.png?x-oss-process=image/resize,h_130'],
                msg: ["老师，你不会...忘记我了吧", "给我记好了，这声音可是我啊！"]
            }]
        },
        {
            id: 86, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E7%A0%82%E7%8B%BC%20%E7%99%BD%E5%AD%90/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20220213152439.png?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E7%A0%82%E7%8B%BC%20%E7%99%BD%E5%AD%90/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/shiroko_spr_02.png?x-oss-process=image/resize,h_130"],
                    msg: ["果然不愧是老师", "能被猜出来，当然开心啦。嗯，真的", '答对了，嗯，下次一起枪银行']
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E7%A0%82%E7%8B%BC%20%E7%99%BD%E5%AD%90/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/shiroko_spr_10.png?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E7%A0%82%E7%8B%BC%20%E7%99%BD%E5%AD%90/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/shiroko_spr_15.png?x-oss-process=image/resize,h_130'],
                msg: ["...", "我真的有在成长"]
            }]
        },
        {
            id: 180, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E4%B9%85%E7%94%B0%20%E6%B3%89%E5%A5%88/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211107192114.png?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E4%B9%85%E7%94%B0%20%E6%B3%89%E5%A5%88/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211107192349.png?x-oss-process=image/resize,h_130"],
                    msg: ["好开心，被主公猜出来了。忍忍！", "主公~ 主公~"]
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E4%B9%85%E7%94%B0%20%E6%B3%89%E5%A5%88/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211107192130.png?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E4%B9%85%E7%94%B0%20%E6%B3%89%E5%A5%88/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211107192138.png?x-oss-process=image/resize,h_130'],
                msg: ["...难道你忘记了泉奈了吗", "姆...泉奈下次一定会更努力让主公猜到的"]
            }]
        },
        {
            id: 214, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E5%8D%83%E9%B8%9F%20%E6%BB%A1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/CH0113_spr-00_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E5%8D%83%E9%B8%9F%20%E6%BB%A1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/CH0113_spr-03_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130"],
                    msg: ["欸嘿~", "还不错吧？呵，呵，呵，呵\n我说话像唱歌？没有的事（"]
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E5%8D%83%E9%B8%9F%20%E6%BB%A1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/CH0113_spr-04_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E5%8D%83%E9%B8%9F%20%E6%BB%A1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/CH0113_spr-08_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130'],
                msg: ["果然...我修行不够吧", "飒飒飒，（跑了"]
            }]
        },
        {
            id: 1, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E5%9C%A3%E5%9B%AD%20%E6%9C%AA%E8%8A%B1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/J_CH0069_spr_22.jpg?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E5%9C%A3%E5%9B%AD%20%E6%9C%AA%E8%8A%B1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/J_CH0069_spr_10.jpg?x-oss-process=image/resize,h_130"],
                    msg: ["真厉害，不愧是老师呢", "太好了！做到了呢！老师", "哈哈~ 压力马斯呐"]
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E5%9C%A3%E5%9B%AD%20%E6%9C%AA%E8%8A%B1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/J_CH0069_spr_06.jpg?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E5%9C%A3%E5%9B%AD%20%E6%9C%AA%E8%8A%B1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/J_CH0069_spr_08.jpg?x-oss-process=image/resize,h_130'],
                msg: ["还是...失败了", "希望老师下次能才对就好了...", "没关系，下次再试试！"]
            }]
        },
        {
            id: 157, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E4%B8%8B%E6%B1%9F%20%E5%B0%8F%E6%98%A5/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211102192631.png?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E4%B8%8B%E6%B1%9F%20%E5%B0%8F%E6%98%A5/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211102192613.png?x-oss-process=image/resize,h_130"],
                    msg: ["老师果然不笨呢！", "老师答对了", "答对了，但是H是不可以的！"]
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E4%B8%8B%E6%B1%9F%20%E5%B0%8F%E6%98%A5/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211102192551.png?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E4%B8%8B%E6%B1%9F%20%E5%B0%8F%E6%98%A5/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211102192607.png?x-oss-process=image/resize,h_130'],
                msg: ["老师在想什么啊？H是不可以的！", "这都猜不对我是谁，下次一定要好好记起来啊", "要努力啊..."]
            }]
        },
        {
            id: 76, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E5%B0%8F%E9%B8%9F%E6%B8%B8%20%E6%98%9F%E9%87%8E/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211101221128.png?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E5%B0%8F%E9%B8%9F%E6%B8%B8%20%E6%98%9F%E9%87%8E/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211101221226.png?x-oss-process=image/resize,h_130"],
                    msg: ["不愧是老师呢，呼", "居然记起来大叔的名字了", "哎呀，答对了。老师真厉害"]
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E5%B0%8F%E9%B8%9F%E6%B8%B8%20%E6%98%9F%E9%87%8E/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211101221216.png?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E5%B0%8F%E9%B8%9F%E6%B8%B8%20%E6%98%9F%E9%87%8E/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211101221211.png?x-oss-process=image/resize,h_130'],
                msg: ["这都听不出是谁也...", "要努力啊，老师", "记不住那也可以算答半对吧..."]
            }]
        },
        {
            id: 38, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E6%9E%A3%20%E4%BC%8A%E5%90%95%E6%B3%A2/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20220118113213.png?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E6%9E%A3%20%E4%BC%8A%E5%90%95%E6%B3%A2/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20220118113236.png?x-oss-process=image/resize,h_130"],
                    msg: ["答对了呢，共犯", "有两下子，老师", "嗯...有机会再一起睡觉（偷懒）", "你真的做到了啊"]
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E6%9E%A3%20%E4%BC%8A%E5%90%95%E6%B3%A2/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20220118113144.png?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E6%9E%A3%20%E4%BC%8A%E5%90%95%E6%B3%A2/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20220118113229.png?x-oss-process=image/resize,h_130'],
                msg: ["老师也学会忘事了嘛", "是吧，但是还是没答出来我是谁", "好累啊，就这样吧"]
            }]
        },
        {
            id: 136, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E4%BC%8A%E5%90%B9/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/ibuki_spr-00_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E4%BC%8A%E5%90%B9/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/ibuki_spr-03_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130"],
                    msg: ["太棒了，老师胜利了！", "对，就是我！", "好耶！老师真厉害"]
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E4%BC%8A%E5%90%B9/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/ibuki_spr-08_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E4%BC%8A%E5%90%B9/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/ibuki_spr-04_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130'],
                msg: ["欸，还是答错了吗", "最后还是不知道我是伊吹，好过分啊", "下次再继续努力嗯"]
            }]
        },
        {
            id: 108, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E5%A4%A9%E7%AB%A5%20%E7%88%B1%E4%B8%BD%E4%B8%9D/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/aris_spr_03.png?x-oss-process=image/resize,h_130', "hhttps://static.kivo.wiki/images/students/%E5%A4%A9%E7%AB%A5%20%E7%88%B1%E4%B8%BD%E4%B8%9D/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/aris_spr_00.png?x-oss-process=image/resize,h_130"],
                    msg: ["胜利了！", "完美达成！", "老师答对了哦"]
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E5%A4%A9%E7%AB%A5%20%E7%88%B1%E4%B8%BD%E4%B8%9D/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/aris_spr_99.png?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E5%A4%A9%E7%AB%A5%20%E7%88%B1%E4%B8%BD%E4%B8%9D/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/aris_spr_10.png?x-oss-process=image/resize,h_130'],
                msg: ["大...大失败", "猜的还是错误的！", "答错了，是爱丽丝啊"]
            }]
        },
        {
            id: 39, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E5%A4%A9%E9%9B%A8%20%E4%BA%9A%E5%AD%90/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211116221648.png?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E5%A4%A9%E9%9B%A8%20%E4%BA%9A%E5%AD%90/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211116221631.png?x-oss-process=image/resize,h_130"],
                    msg: ["是，是我答对了", "听的不错啊，是我", "不愧是你"]
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E5%A4%A9%E9%9B%A8%20%E4%BA%9A%E5%AD%90/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211116221744.png?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E5%A4%A9%E9%9B%A8%20%E4%BA%9A%E5%AD%90/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/QQ%E6%88%AA%E5%9B%BE20211116221843.png?x-oss-process=image/resize,h_130'],
                msg: ["还...还听不出来是我吗", "我得声音不奇怪吧..？", "终究还是没答对啊，老师"]
            }]
        },
        {
            id: 142, success: [
                {
                    avatar: ['https://static.kivo.wiki/images/students/%E5%AE%87%E6%B3%BD%20%E7%8E%B2%E7%BA%B1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/J_CH0167_spr-18_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130', "https://static.kivo.wiki/images/students/%E5%AE%87%E6%B3%BD%20%E7%8E%B2%E7%BA%B1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/J_CH0167_spr-03_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130"],
                    msg: ["太好了，不愧是老师", "什么...你说我就知道是你，“芋泥味的小孩”？", "为了寻求呼唤我之人……我便在此……！"]
                }],
            error: [{
                avatar: ['https://static.kivo.wiki/images/students/%E5%AE%87%E6%B3%BD%20%E7%8E%B2%E7%BA%B1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/J_CH0167_spr-08_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130', 'https://static.kivo.wiki/images/students/%E5%AE%87%E6%B3%BD%20%E7%8E%B2%E7%BA%B1/gallery/%E5%88%9D%E5%A7%8B%E7%AB%8B%E7%BB%98%E5%B7%AE%E5%88%86/J_CH0167_spr-06_0_waifu2x_2x_1n_png.jpg?x-oss-process=image/resize,h_130'],
                msg: ["咕...错了错了", "这次大失败了", "还是没猜出是我啊"]
            }]
        }
    ]
}


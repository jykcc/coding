module.exports = {
    base: '/coding/',
    title: '又 见 月',
    description: 'Yue Ban',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: {
            '/java/': [
                {
                    title: 'JavaSe',  //组名
                    children: ['/java/javase'],   //该分组下要显示的文件的目录
                },
            ],
            '/zh/guide/':  {
                    title: 'Java',
                },
        },

    },
    plugins: [['vuepress-plugin-code-copy', true]]

}

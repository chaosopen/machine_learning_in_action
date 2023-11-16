module.exports = {
    title: '《人工智能之机器学习入门到实战》电子书',
    base: '/',   // 设置站点根路径
    dest: './docs',  // 设置输出目录
    port: 8089,
    head: [
      ['meta', { name: 'keywords', content: '人工智能,机器学习,数据分析'}],
    ],
    plugins: [
      ['sitemap', {
          hostname: "https://ml.chaosopen.cn",
          // 排除无实际内容的页面
          exclude: ["/404.html"]
        }
      ],
      [
        'vuepress-plugin-baidu-autopush'
      ],
      ['one-click-copy', {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功!', // default is 'Copied successfully!'
        toolTipMessage: '复制', // default is ''Copy to clipboard'
        duration: 800, // prompt message display time
      }
    ]
    ],
    themeConfig: {
        // 添加导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: '一起交流', link: '/guide/' },
            { text: '赞助', link: '/sponsor' },
            { text: "GitHub", link: 'https://github.com/chaosopen/machine_learning_in_action'}
        ],
        // 为以下路由添加左侧边栏
        sidebar: [
            {
              title:"首页",
              path:"/"
            },
            {
              title:"第一章：人工智能入门",
              path:"/chapter1/index",
              collapsable: false,
              children:[
                '/wait',
              ]
            },
            {
              title:"第二章：机器学习基础",
              path:"/chapter2/index",
              collapsable: false,
              children:[
                '/wait',
              ]
            },
            {
              title:"第三章：机器学习算法",
              path:"/chapter3/index",
              collapsable: false,
              children:[
                '/wait',
              ]
            },
            {
              title:"第四章：机器学习实战",
              path:"/chapter4/index",
              collapsable: false,
              children:[
                '/wait',
              ]
            },
            {
              title:"赞助",
              path:"/sponsor"
            }],
        sidebarDepth: 2,//左侧导航显示的层级
        lastUpdated: 'Last Updated'
    }
}
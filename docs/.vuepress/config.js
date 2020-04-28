
module.exports = {
    title: '前端规范文档',  // 设置网站标题
    description : 'aisino',
    themeConfig: {
      lastUpdated: true,
      nav:require('./nav/nav'),
      sidebar: {
        '/':[
          {
            title:"HTML代码规范",
            path:'/html/code/',
            collapsable:false,
            sidebarDepth:2,
            children:[
                '/html/code',
                '/html/note',
                '/html/template',
                '/html/webapp',
            ]
          },
          {
            title:"图片规范",
            path:'/image/format/',
            collapsable:false,
            sidebarDepth:2,
            children:[
                '/image/format',
                '/image/size',
                '/image/quality',
                '/image/import',
            ]
          },
          {
            title:"css规范",
            path:'/css/code/',
            collapsable:false,
            sidebarDepth:2,
            children:[
                '/css/code',
                '/css/note',
                '/css/sass',
                '/css/reset',
                '/css/query',
                '/css/webkit',
            ]
          }
        ]
      },
    },
    plugins:['@vuepress/plugin-back-to-top']
    ,
  
  }



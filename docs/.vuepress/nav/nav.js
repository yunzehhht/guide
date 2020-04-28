module.exports = [
  { text: "首页", link: "/" },
  {
    text: "规范",
    ariaLabel: "规范",
    items: [
        {
          text:'前端规范',
          items:[
            {
              text: "HTML规范",
              link: "/html/",
            },
            {
              text: "图片规范",
              link: "/image/"
            },
            {
              text: "CSS规范",
              link: "/css/"
            },
            {
              text: "命名规范",
              link: "/name/"
            },
            {
              text: "JS规范",
              link: "/js/"
            }
          ]
        },{
          text:'模块化规范',
          items:[
            {
              text: "模块化打包",
              link:'/module/'
            },
            {
              text: "模块化导入",
              link:'/module/'
            }
          ]
        }
    ],
  },
  {
    text: "分类",
    ariaLabel: "分类",
    items: [
      {
        text: "前端",
        items: [
          {
            text: "Vue",
            link: "/vue/",
          },
          {
            text: "React",
            link: "/react/",
          },
          {
            text: "Angular",
            link: "/angular/",
          },
        ],
      },
      {
        text: "模块化开发",
        items: [
          {
            text: "Gulp",
            link: "/gulp/",
          },
          {
            text: "Webpack",
            link: "/Webpack/",
          },
        ],
      },
      {
        text: "其他",
        items: [
          {
            text: "other",
            link: "/other/",
          },
        ],
      },
    ],
  },
  { text: "语言", items: [{ text: "Chinese",link:'/zh/' }, { text: "English" ,link:'/en/'}] },
  { text: "GitHub", link: "https://github.com" },
];

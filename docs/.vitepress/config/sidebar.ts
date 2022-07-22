/**《大话数据结构》 */
export function sidebarDataStructure() {
  return [
    {
      text: "《大话数据结构》",
      collapsible: true,
      items: [
        {
          text: "第 1 章 数据结构绪论",
          link: "/笔记/大话数据结构/01-数据结构绪论",
        },
        { text: "第 2 章 算法", link: "/笔记/大话数据结构/02-算法" },
        { text: "第 3 章 线性表", link: "/笔记/大话数据结构/03-线性表" },
        { text: "第 4 章 栈和队列", link: "/笔记/大话数据结构/04-栈和队列" },
        { text: "第 5 章 串", link: "/笔记/大话数据结构/05-串" },
        { text: "第 6 章 树", link: "/笔记/大话数据结构/06-树" },
        { text: "第 7 章 图", link: "/笔记/大话数据结构/07-图" },
      ],
    },
  ];
}

/** Webpack */
export function sidebarWebpack() {
  return [
    {
      text: "Webpack",
      collapsible: true,
      items: [
        { text: "安装和配置", link: "/文档/webpack/01-安装和配置" },
        { text: "静态资源处理", link: "/文档/webpack/02-静态资源处理" },
        { text: "打包输出处理", link: "/文档/webpack/03-打包输出处理" },
        { text: "开发环境", link: "/文档/webpack/04-开发环境" },
        { text: "代码切割", link: "/文档/webpack/05-代码切割" },
        { text: "未完待续", link: "/文档/webpack/to-be-continued" },
      ],
    },
  ];
}

/** Linux */
export function sidebarLinux() {
  return [
    {
      text: "Linux",
      collapsible: true,
      items: [
        { text: "Nginx安装", link: "/文档/Linux/01-安装Nginx" },
        { text: "Linux基本命令", link: "/文档/Linux/02-Linux基本命令" },
      ],
    },
  ];
}

/** 前端基础-JavaScript */
export function sidebarJavaScript() {
  return [
    {
      text: "JavaScript",
      collapsible: true,
      items: [
        {
          text: "冴羽大佬博客的深入JavaScript系列",
          link: "/前端基础/JavaScript/冴羽大佬博客的深入JavaScript系列",
        },
        { text: "原型和原型链", link: "/前端基础/JavaScript/01-原型和原型链" },
        {
          text: "动态作用域和静态作用域",
          link: "/前端基础/JavaScript/02-词法作用域",
        },
        {
          text: "call和apply模拟实现",
          link: "/前端基础/JavaScript/03-call和apply模拟实现",
        },
      ],
    },
  ];
}

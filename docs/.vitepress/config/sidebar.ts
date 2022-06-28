/**
 * 《大话数据结构》
 */
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
      ],
    },
  ];
}

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
      ],
    },
  ];
}

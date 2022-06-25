/**
 * 《大话数据结构》
 */
export function sidebarDataStructure() {
  return [
    {
      text: "《大话数据结构》",
      collapsible: true,
      items: [
        { text: "数据结构绪论", link: "/笔记/大话数据结构/01-数据结构绪论" },
        { text: "算法", link: "/笔记/大话数据结构/02-算法" },
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
        { text: "新手上路", link: "/文档/webpack/01-webpack安装&配置" },
        { text: "静态资源处理", link: "/文档/webpack/02-静态资源处理" },
      ],
    },
  ];
}

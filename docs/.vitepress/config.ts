import nav from "./config/nav";
import { sidebarDataStructure, sidebarWebpack } from "./config/sidebar";

export default {
  title: "JustinJsn博客",
  lastUpdated: true,
  outDir: "/var/www/html",
  themeConfig: {
    nav: nav(),
    sidebar: {
      "/笔记/大话数据结构": sidebarDataStructure(),
      "/文档/webpack": sidebarWebpack(),
    },
    footer: {
      message: "MIT License",
      copyright: `Copyright © 2022-present JustinJsn`,
    },
    editLink: {
      pattern:
        "https://github.com/JustinJsn/vitepress-blog/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/JustinJsn/vitepress-blog" },
    ],
  },
};

import nav from "./config/nav";
import { sidebarDataStructure } from "./config/sidebar";

export default {
  title: "JustinJsn博客",
  lastUpdated: true,
  outDir: "/var/www/html",
  themeConfig: {
    nav: nav(),
    sidebar: {
      "/大话数据结构": sidebarDataStructure(),
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

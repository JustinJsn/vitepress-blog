import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import nav from "./config/nav";
import {
  sidebarDataStructure,
  sidebarWebpack,
  sidebarLinux,
} from "./config/sidebar";

const customElements = ["mjx-container"];
export default defineConfig({
  base: "/vitepress-blog/",
  title: "JustinJsn博客",
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  themeConfig: {
    nav: nav(),
    sidebar: {
      "/笔记/大话数据结构": sidebarDataStructure(),
      "/文档/webpack": sidebarWebpack(),
      "/文档/Linux": sidebarLinux(),
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
});

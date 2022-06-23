import nav from "./config/nav";
import { sidebarDataStructure } from "./config/sidebar";

export default {
  title: "blog",
  lastUpdated: true,
  themeConfig: {
    nav: nav(),
    sidebar: {
      "/大话数据结构": sidebarDataStructure(),
    },
  },
};

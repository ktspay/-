import { defineConfig } from "vitepress";
import nav from "./nav.mts";
import sidebar from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SnowAdmin",
  description: "SnowAdmin官方文档",
  head: [["link", { rel: "icon", href: "/snow.svg" }]], // 浏览器标签页logo
  themeConfig: {
    logo: "/snow.svg", // 项目的logo
    // 顶部按钮配置
    nav,
    sidebar,
    outlineTitle: "页面导航", // 右侧导航顶层标题
    outline: "deep", // 右侧导航标题显示 https://vitepress.dev/zh/reference/default-theme-config#outline
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2024-2029 兔子先森",
    },
  },
});

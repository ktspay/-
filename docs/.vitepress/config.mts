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
    socialLinks: [
      { icon: "github", link: "https://gitee.com/wang_fan_w/SnowAdmin" },
      {
        icon: {
          svg: '<svg t="1726989303594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1443" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 992C246.895625 992 32 777.104375 32 512S246.895625 32 512 32s480 214.895625 480 480-214.895625 480-480 480z m242.9521875-533.3278125h-272.56875a23.7121875 23.7121875 0 0 0-23.71125 23.7121875l-0.024375 59.255625c0 13.08 10.6078125 23.7121875 23.6878125 23.7121875h165.96c13.104375 0 23.7121875 10.6078125 23.7121875 23.6878125v11.855625a71.1121875 71.1121875 0 0 1-71.1121875 71.1121875h-225.215625a23.7121875 23.7121875 0 0 1-23.6878125-23.7121875V423.1278125a71.1121875 71.1121875 0 0 1 71.0878125-71.1121875h331.824375a23.7121875 23.7121875 0 0 0 23.6878125-23.71125l0.0721875-59.2565625a23.7121875 23.7121875 0 0 0-23.68875-23.7121875H423.08a177.76875 177.76875 0 0 0-177.76875 177.7921875V754.953125c0 13.1034375 10.60875 23.7121875 23.713125 23.7121875h349.63125a159.984375 159.984375 0 0 0 159.984375-159.984375V482.36a23.7121875 23.7121875 0 0 0-23.7121875-23.6878125z" fill="#C71D23" p-id="1444"></path></svg>',
        },
        link: "https://gitee.com/wang_fan_w/SnowAdmin",
      },
    ],
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2024-2029 兔子先森",
    },
  },
});

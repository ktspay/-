// nav.mts
export default [
  {
    text: "三国演义",
    link: "/三国演义/三国演义-上卷/宴桃园豪杰三结义",
    activeMatch: "/三国演义",
  },
  {
    text: "西游记",
    link: "/西游记/西游记-上卷/灵根育孕源流出",
    activeMatch: "/西游记",
  },
  {
    text: "链接",
    // 内部配置items则该按钮是下拉
    items: [
      {
        text: "在线预览",
        link: "http://101.126.93.137/#/login",
      },
      {
        text: "Gitee仓库",
        link: "https://gitee.com/wang_fan_w/SnowAdmin",
      },
      {
        text: "GitHub仓库",
        link: "https://github.com/WANG-Fan0912/SnowAdmin",
      },
    ],
  },
];

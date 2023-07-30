import { DefaultTheme } from "vitepress"

export const sidebar: DefaultTheme.Sidebar = {
  // /column/css/表示对这个文件夹下的所有md文件做侧边栏配置
  "/column/css/": [
    {
      text: "小技巧",
      items: [
        {
          text: "文本显示省略号",
          link: "/column/css/001_文本显示省略号",
        },
        {
          text: "盒子毛玻璃效果",
          link: "/column/css/002_盒子毛玻璃效果",
        },
        {
          text: "让盒子边框变透明",
          link: "/column/css/003_盒子边框透明",
        },
      ],
    },
  ],

  // vue相关
  "/column/vue/": [
    {
      text: "Vue3",
      items: [
        {
          text: "项目搭建",
          link: "/column/vue/001_vue3项目搭建",
        },
        {
          text: "路由配置",
          link: "/column/vue/002_vue3配置路由",
        },
      ],
    },
  ],

  // react相关
  "/column/react/": [
    {
      text: "React",
      items: [
        {
          text: "项目搭建",
          link: "/column/react/001_React项目搭建",
        },
      ],
    },
  ],
}

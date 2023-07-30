import { defineConfig } from "vitepress"
import { nav, sidebar } from "./relaConf"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Jachin-knowledge-base/',
  title: "热心网友小李", // 标题
  themeConfig: {
    nav: nav, // 把定义的nav给替换进来
    sidebar: sidebar, // 把定义的sidebar给替换进来
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }, // 右上角github图标
    ],
    outline: {
      level: [2, 6], // 锚点对应的标题级数
      label: "目录",
    },
    search: {
      provider: "local", // 开启本地搜索
    },
  },
})

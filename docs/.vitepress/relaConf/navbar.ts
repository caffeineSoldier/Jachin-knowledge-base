import { DefaultTheme } from "vitepress"
export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/", // 表示docs/index.md
  },
  {
    text: "前端三大件",
    items: [
      {
        text: "HTML",
        link: "/column/html/", // 表示docs/column/html/index.md
      },
      {
        text: "CSS",
        link: "/column/css/",
      },
      {
        text: "JavaScript",
        link: "/column/javascript/",
      },
    ],
  },
  {
    text: "CV工程师",
    items: [
      {
        text: "Vue",
        link: "/column/vue/",
      },
      {
        text: "React",
        link: "/column/react/",
      },
    ],
  },
  {
    text: "GPT",
    items: [
      { text: "ChatMoss", link: "http://chatmoss.aihao123.cn/#/chat" },
      { text: "AlienGPT", link: "https://chat.waixingyun.cn/#/home" },
    ],
  },
]

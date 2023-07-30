### react + antd

---

#### 创建项目

```jsx
npx create-react-app 项目名
```

#### 改造项目

项目只需要保存 `index.js` 和 `App.js` 文件（确定项目采用函数组件 rfc 还是类组件 rcc 进行开发）

#### 配置 antd

1. 下载依赖

```jsx
yarn add antd
```

2. 页面中使用

```jsx
import { BUtton } from 'antd'
<Button><Button/>
```

3. 国际化配置（index.js）

```jsx
import zhCN from "antd/lib/locale/zh_CN"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>
)
```

#### 配置项目启动环境

```jsx
yarn add @craco/craco
```

`craco`是一个第三方插件，将 React 默认启动命令`react-scripts`替换为`craco`来启动项目，用来加载更多的环境，比如 less

#### 配置 craco（package.json）

```jsx
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "craco eject"
},
```

采用 craco 启动项目，默认加载 craco

下载 less 插件，让 craco 启动加载 less 插件

```jsx
yarn add craco-less
```

在 src 同级目录中新建`craco.config.js`文件

```jsx
const CracoLessPlugin = require("craco-less")
//就是在配置webpack
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
}
```

#### 配置路径别名

在 `craco.config.js` 文件中

```jsx
const CracoLessPlugin = require("craco-less")
const path = require("path")
//就是在配置webpack
module.exports = {
  webpack: {
    //设置路径别名
    alias: {
      "@": path.resolve(__dirname, "src"), //c:\desttop/web32/react-project\src
      "@comp": path.resolve(__dirname, "src/components"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
}
```

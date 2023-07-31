### Pinia 安装及简单使用

---

#### 下载依赖

```txt
yarn add pinia
```

#### 基础配置

1. 在`main.ts`中全局挂载

```ts
import { createPinia } from "pinia"
const app = createApp(App)
app.use(createPinia())
app.mount("#app")
```

2. 创建模块文件

```txt
src
 |--- store
 |      |--- global.ts
 |      |--- users.ts
 |      |--- ...
```

3. 配置模块（以`global.ts`为例）

```ts
import { defineStore } from "pinia"
import { getMenusApi } from "@/api/user"
export const useGlobal = defineStore("global", {
  state: () => ({
    menusData: [],
  }),
  getters: {},
  actions: {
    async getMenusAsync() {
      const res = await getMenusApi()
      this.menusData = res
    },
  },
})
```

#### 组件中使用

##### 获取数据

```ts
import { useGlobal } from "@/store/global"
// 获取仓库模块对象
const globalStore = useGlobal()
console.log(globalStore.menusData)
```

##### 调用方法

```ts
import { onMounted } from "vue"
import { useGlobal } from "@/store/global"
const globalStore = useGlobal()
onMounted(() => {
  globalStore.getMenusAsync()
})
```

#### 官方链接

[前往 🍍pinia](https://pinia.vuejs.org/zh/)

import comp from "F:/code_project/VueProject/blog/blog/src/.vuepress/.temp/pages/data/ck/ClickHouse进阶.html.vue"
const data = JSON.parse("{\"path\":\"/data/ck/ClickHouse%E8%BF%9B%E9%98%B6.html\",\"title\":\"ClickHouse进阶\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ClickHouse进阶\",\"cover\":\"/assets/images/cover1.jpg\",\"icon\":\"file\",\"order\":2,\"author\":\"RUAN LONG\",\"date\":\"2024-10-23T00:00:00.000Z\",\"category\":[\"Data\",\"ClickHouse\"],\"tag\":[\"基础\",\"使用指南\"],\"sticky\":true,\"star\":true,\"footer\":\"这是测试显示的页脚\",\"copyright\":\"无版权\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.51,\"words\":154},\"filePathRelative\":\"data/ck/ClickHouse进阶.md\",\"localizedDate\":\"2024年10月23日\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

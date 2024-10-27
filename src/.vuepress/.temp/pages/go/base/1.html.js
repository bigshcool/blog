import comp from "D:/code/gitcode/blog/src/.vuepress/.temp/pages/go/base/1.html.vue"
const data = JSON.parse("{\"path\":\"/go/base/1.html\",\"title\":\"Kitex\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Kitex\",\"cover\":\"/assets/images/cover1.jpg\",\"icon\":\"file\",\"order\":4,\"author\":\"RUAN LONG\",\"date\":\"2024-10-23T00:00:00.000Z\",\"category\":[\"JAVA\"],\"tag\":[\"基础\",\"使用指南\"],\"sticky\":true,\"star\":true,\"footer\":\"这是测试显示的页脚\",\"copyright\":\"无版权\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.5,\"words\":151},\"filePathRelative\":\"go/base/1.md\",\"localizedDate\":\"2024年10月23日\",\"excerpt\":\"\"}")
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

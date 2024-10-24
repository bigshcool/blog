import comp from "F:/code_project/VueProject/blog/blog/src/.vuepress/.temp/pages/java copy/index.html.vue"
const data = JSON.parse("{\"path\":\"/java%20copy/\",\"title\":\"JAVA\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JAVA\",\"index\":false,\"icon\":\"/assets/icon/java.png\",\"category\":[\"使用指南1\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"java copy/README.md\",\"excerpt\":\"\"}")
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

import comp from "F:/code_project/VueProject/blog/blog/src/.vuepress/.temp/pages/go/README copy.html.vue"
const data = JSON.parse("{\"path\":\"/go/README%20copy.html\",\"title\":\"GO\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"GO\",\"index\":false,\"icon\":\"/assets/icon/go.png\",\"category\":[\"使用指南1\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"go/README copy.md\",\"excerpt\":\"\"}")
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

export const typesMap = {"article":{"/":{"path":"/article/","indexes":[10,11,12,13,14,26,15,27,16,17,25,4,20,19,18,30,31,21,22,23,24,28,29,32,0,1,2,5,6,9,7,8,3]}},"star":{"/":{"path":"/star/","indexes":[21,10,11,12,13,14,26,15,27,16,17,25,28,4]}},"timeline":{"/":{"path":"/timeline/","indexes":[10,11,12,13,14,26,15,27,16,17,25,20,19,18,30,31,21,22,23,24,28,29,4]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


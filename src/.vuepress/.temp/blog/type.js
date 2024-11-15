export const typesMap = {"article":{"/":{"path":"/article/","indexes":[10,11,12,13,14,25,26,27,28,29,15,16,24,4,19,18,17,32,33,20,21,22,23,30,31,34,0,1,5,6,9,7,8,2,3]}},"star":{"/":{"path":"/star/","indexes":[20,10,11,12,13,14,25,26,27,28,29,15,16,24,30,4]}},"timeline":{"/":{"path":"/timeline/","indexes":[10,11,12,13,14,25,26,27,28,29,15,16,24,19,18,17,32,33,20,21,22,23,30,31,4]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


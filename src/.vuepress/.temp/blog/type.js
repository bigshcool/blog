export const typesMap = {"article":{"/":{"path":"/article/","indexes":[10,11,12,13,14,24,25,26,27,28,15,29,23,1,18,17,16,32,33,19,20,21,22,30,31,34,0,2,3,6,4,5,7,8,9]}},"star":{"/":{"path":"/star/","indexes":[19,10,11,12,13,14,24,25,26,27,28,15,29,23,30,1]}},"timeline":{"/":{"path":"/timeline/","indexes":[10,11,12,13,14,24,25,26,27,28,15,29,23,18,17,16,32,33,19,20,21,22,30,31,1]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


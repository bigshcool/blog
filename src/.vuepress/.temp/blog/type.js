export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,1,2,3,4,5,6,7,8,24,11,19,18,17,27,28,20,21,22,23,25,26,29,9,12,13,16,14,15,10]}},"star":{"/":{"path":"/star/","indexes":[20,0,1,2,3,4,5,6,7,8,24,25,11]}},"timeline":{"/":{"path":"/timeline/","indexes":[0,1,2,3,4,5,6,7,8,24,19,18,17,27,28,20,21,22,23,25,26,11]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


export const typesMap = {"article":{"/":{"path":"/article/","indexes":[6,7,8,9,10,11,12,13,14,24,0,19,18,17,27,28,20,21,22,23,25,26,29,1,2,5,3,4,15,16]}},"star":{"/":{"path":"/star/","indexes":[20,6,7,8,9,10,11,12,13,14,24,25,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[6,7,8,9,10,11,12,13,14,24,19,18,17,27,28,20,21,22,23,25,26,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


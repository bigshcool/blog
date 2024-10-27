export const typesMap = {"article":{"/":{"path":"/article/","indexes":[8,9,10,11,12,23,13,14,22,0,17,16,15,26,27,18,19,20,21,24,25,28,1,2,5,3,4,6,7]}},"star":{"/":{"path":"/star/","indexes":[18,8,9,10,11,12,23,13,14,22,24,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[8,9,10,11,12,23,13,14,22,17,16,15,26,27,18,19,20,21,24,25,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


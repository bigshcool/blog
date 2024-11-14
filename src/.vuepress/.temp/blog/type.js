export const typesMap = {"article":{"/":{"path":"/article/","indexes":[18,19,20,21,22,25,26,27,28,29,23,24,17,4,12,11,10,32,33,13,14,15,16,30,31,34,0,1,5,6,9,7,8,2,3]}},"star":{"/":{"path":"/star/","indexes":[13,18,19,20,21,22,25,26,27,28,29,23,24,17,30,4]}},"timeline":{"/":{"path":"/timeline/","indexes":[18,19,20,21,22,25,26,27,28,29,23,24,17,12,11,10,32,33,13,14,15,16,30,31,4]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });


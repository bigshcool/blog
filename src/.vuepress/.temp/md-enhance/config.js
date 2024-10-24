import CodeDemo from "F:/code_project/VueProject/blog/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "F:/code_project/VueProject/blog/blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "F:/code_project/VueProject/blog/blog/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "F:/code_project/VueProject/blog/blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};

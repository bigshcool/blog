import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/demo/": [
    {
      text: "Demo 示例",
      children: [
        "example1", // /demo/example1.md
        "example2", // /demo/example2.md
      ],
    },
  ],

  "/posts/": "structure",
  "/java/": "structure",
  "/go/": "structure",
});

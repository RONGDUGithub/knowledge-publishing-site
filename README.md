# RONGDU Knowledge Hub

这是一个适合 GitHub Pages 发布的静态知识库项目，当前首页为公开访问。

## 本地查看

直接打开 `index.html` 即可预览。

## 更新文章

资料文件放在 `content` 目录中。在 `script.js` 的 `articles` 数组中新增或修改入口：

```js
{
  title: "文章标题",
  category: "分类",
  summary: "文章摘要",
  tags: ["关键词1", "关键词2"],
  url: "文章链接或页面锚点"
}
```

## 发布到 GitHub Pages

1. 在 GitHub 新建仓库，例如 `knowledge-publishing-site`。
2. 把本项目提交并推送到该仓库。
3. 在仓库 `Settings -> Pages` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支和 `/root`，保存。
5. 等待部署完成后访问：

```text
https://rongdugithub.github.io/knowledge-publishing-site/
```

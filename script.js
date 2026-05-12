const articles = [
  {
    title: "如何用 GitHub Pages 发布个人知识库",
    category: "发布教程",
    summary: "从本地文件夹、Git 提交、GitHub 仓库到 Pages 链接的完整路径。",
    tags: ["GitHub", "Pages", "静态网站"],
    url: "#workflow",
  },
  {
    title: "研究笔记的网页化整理方法",
    category: "知识管理",
    summary: "把论文阅读、实验记录和阶段性结论整理成可检索的网页内容。",
    tags: ["研究", "笔记", "结构化"],
    url: "#articles",
  },
  {
    title: "面向公开发布的文章结构模板",
    category: "写作模板",
    summary: "用摘要、问题、方法、结果和参考资料来组织一篇知识文章。",
    tags: ["模板", "写作", "复用"],
    url: "#articles",
  },
  {
    title: "把本地资料逐步迁移到网页",
    category: "发布教程",
    summary: "先做目录和摘要，再逐步补充完整页面，避免一次性迁移成本过高。",
    tags: ["迁移", "内容维护", "工作流"],
    url: "#articles",
  },
  {
    title: "项目主页应该展示哪些信息",
    category: "网站设计",
    summary: "主页优先展示定位、核心分类、最新文章和 GitHub 入口。",
    tags: ["主页", "导航", "信息架构"],
    url: "#top",
  },
  {
    title: "长期维护知识库的版本策略",
    category: "知识管理",
    summary: "用 Git commit 记录每次内容更新，让知识库有清晰的演进历史。",
    tags: ["版本", "维护", "Git"],
    url: "#articles",
  },
];

const articleGrid = document.querySelector("#articleGrid");
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");

let activeCategory = "全部";

function getCategories() {
  return ["全部", ...new Set(articles.map((article) => article.category))];
}

function renderFilters() {
  categoryFilters.innerHTML = getCategories()
    .map(
      (category) => `
        <button class="filter-button${category === activeCategory ? " active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `,
    )
    .join("");
}

function articleMatchesQuery(article, query) {
  const text = [article.title, article.category, article.summary, ...article.tags].join(" ").toLowerCase();
  return text.includes(query.toLowerCase().trim());
}

function renderArticles() {
  const query = searchInput.value;
  const filtered = articles.filter((article) => {
    const matchesCategory = activeCategory === "全部" || article.category === activeCategory;
    return matchesCategory && articleMatchesQuery(article, query);
  });

  articleGrid.innerHTML = filtered
    .map(
      (article) => `
        <article class="article-card">
          <span class="category">${article.category}</span>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
          <div class="tags">
            ${article.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("")}
          </div>
          <a href="${article.url}">阅读内容</a>
        </article>
      `,
    )
    .join("");

  emptyState.hidden = filtered.length > 0;
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderArticles();
});

searchInput.addEventListener("input", renderArticles);

renderFilters();
renderArticles();

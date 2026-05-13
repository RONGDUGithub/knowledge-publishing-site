const articles = [
  {
    title: "Deafal Learning Path",
    category: "网页资料",
    summary: "学习路径网页，适合作为课程或知识路线的主线入口。",
    tags: ["Learning Path", "Deafal", "网页"],
    url: "./content/defal_learning_path.html",
  },
  {
    title: "Deafal Thesis Checklist",
    category: "网页资料",
    summary: "论文检查清单网页，用于写作、修改和投稿前核对。",
    tags: ["Thesis", "Checklist", "论文"],
    url: "./content/defal_thesis_checklist.html",
  },
  {
    title: "Claude Code Guide",
    category: "网页资料",
    summary: "Claude Code 使用指南网页，便于快速打开和分享。",
    tags: ["Claude Code", "Guide", "工程"],
    url: "./content/claude-code-guide.html",
  },
  {
    title: "走进大模型智能体：认识架构、剖析风险与工程防护",
    category: "PPT",
    summary: "大模型智能体主题演示文稿，可下载后用 PowerPoint 或 WPS 打开。",
    tags: ["LLM Agent", "架构", "风险", "工程防护"],
    url: "./content/llm-agent-architecture-risk-engineering.pptx",
  },
  {
    title: "Codex 安装教程",
    category: "DOCX",
    summary: "Codex 安装教程文档，可下载后用 Word 或 WPS 打开。",
    tags: ["Codex", "安装", "教程", "DOCX"],
    url: "./content/codex-install-guide.docx",
  },
];

const accessPassword = "goose";
const authStorageKey = "deafalKnowledgeAccess";
const authScreen = document.querySelector("#authScreen");
const authForm = document.querySelector("#authForm");
const passwordInput = document.querySelector("#passwordInput");
const unlockButton = document.querySelector("#unlockButton");
const authError = document.querySelector("#authError");
const logoutButton = document.querySelector("#logoutButton");
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

function getActionText(article) {
  if (article.category === "PPT") return "下载 PPT";
  if (article.category === "DOCX") return "下载 DOCX";
  return "打开网页";
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
          <a href="${article.url}" target="_blank" rel="noreferrer">${getActionText(article)}</a>
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

function readAccessState() {
  try {
    return sessionStorage.getItem(authStorageKey) === "true";
  } catch {
    return false;
  }
}

function writeAccessState(isAuthenticated) {
  try {
    if (isAuthenticated) {
      sessionStorage.setItem(authStorageKey, "true");
    } else {
      sessionStorage.removeItem(authStorageKey);
    }
  } catch {
    // Storage can be blocked in some browser privacy modes; visual unlock still works.
  }
}

function unlockContent() {
  document.body.classList.remove("auth-locked");
  authScreen.hidden = true;
  authScreen.setAttribute("aria-hidden", "true");
  authScreen.style.display = "none";
  writeAccessState(true);
  document.querySelector("#articles").scrollIntoView({ block: "start" });
}

function lockContent() {
  document.body.classList.add("auth-locked");
  authScreen.hidden = false;
  authScreen.removeAttribute("aria-hidden");
  authScreen.style.display = "grid";
  writeAccessState(false);
  passwordInput.value = "";
  passwordInput.focus();
}

function checkPassword(event) {
  event.preventDefault();
  const isValid = passwordInput.value.trim() === accessPassword;
  authError.hidden = isValid;
  if (isValid) {
    unlockContent();
  } else {
    passwordInput.select();
  }
}

authForm.addEventListener("submit", checkPassword);
unlockButton.addEventListener("click", checkPassword);

logoutButton.addEventListener("click", () => {
  lockContent();
});

renderFilters();
renderArticles();
if (readAccessState()) {
  unlockContent();
} else {
  lockContent();
}

const articles = [
  {
    title: "MLA",
    category: "DOCX",
    summary: "作者：一只神秘二维生物。MLA 文档，可下载后使用 Word 或 WPS 打开。发布时间：2026-08-28。",
    tags: ["MLA", "DOCX", "一只神秘二维生物", "2026-08-28"],
    url: "./content/mla-mysterious-2d-creature.docx",
  },
  {
    title: "SFT",
    category: "DOCX",
    summary: "作者：一只神秘二维生物。SFT 文档，可下载后使用 Word 或 WPS 打开。发布时间：2026-08-28。",
    tags: ["SFT", "DOCX", "一只神秘二维生物", "2026-08-28"],
    url: "./content/sft-mysterious-2d-creature.docx",
  },
  {
    title: "使用中转站，如何更换 Codex 的 API",
    category: "DOCX",
    summary: "作者：bolun。使用中转站更换 Codex API 的操作文档，可下载后使用 Word 或 WPS 打开。发布时间：2026-08-28。",
    tags: ["Codex", "API", "中转站", "DOCX", "bolun", "2026-08-28"],
    url: "./content/switch-codex-api-with-relay-bolun.docx",
  },
  {
    title: "AR/XR Glasses Survey",
    category: "PPT",
    summary: "作者：留风禾。AR/XR Glasses Survey 演示文稿，可下载后使用 PowerPoint 或 WPS 打开。发布时间：2026-08-27。",
    tags: ["AR", "XR", "Glasses", "Survey", "PPT", "留风禾", "2026-08-27"],
    url: "./content/ar-xr-glasses-survey-liu-fenghe.pptx",
  },
  {
    title: "提示词注入与 Role Confusion：组会详细版",
    category: "PPT",
    summary: "提示词注入与 Role Confusion 主题组会详细版演示文稿，可下载后使用 PowerPoint 或 WPS 打开。发布时间：2026-08-27。",
    tags: ["提示词注入", "Prompt Injection", "Role Confusion", "组会", "PPT", "2026-08-27"],
    url: "./content/prompt-injection-role-confusion-group-meeting-gamini.pptx",
  },
  {
    title: "智能体办公赋能培训：Trae work 超简单版",
    category: "PDF",
    summary: "作者：杜蓉。面向文科生和公职办公人员的智能体办公科普与 Trae work 使用指导，超级简单版本，欢迎下载使用；也欢迎发邮箱索要 PPT 版本。发布时间：2026-06-21。",
    tags: ["智能体办公", "Trae work", "文科生", "公职办公", "PDF", "杜蓉", "2026-06-21"],
    url: "./content/ai-office-trae-work-du-rong.pdf",
  },
  {
    title: "AI 和大模型科普：太原理工大学",
    category: "PDF",
    summary: "作者：李猈。AI 和大模型科普资料，可下载阅读；如需 PPT 版本，可以发邮件索取。发布时间：2026-06-21。",
    tags: ["AI", "大模型", "科普", "太原理工大学", "PDF", "李猈", "2026-06-21"],
    url: "./content/ai-and-llm-popular-science-taiyuan-university-of-technology-li-pi.pdf",
  },
  {
    title: "安装 Codex 速通",
    category: "DOCX",
    summary: "作者：bolun。安装 Codex 速通文档，可下载后用 Word 或 WPS 打开。发布时间：2026-05-31。",
    tags: ["Codex", "安装", "速通", "bolun", "2026-05-31"],
    url: "./content/install-codex-quickstart-bolun.docx",
  },
  {
    title: "TRAE SOLO 操作指南",
    category: "DOC",
    summary: "作者：Louis。TRAE SOLO 操作指南文档，可下载后用 Word 或 WPS 打开。发布时间：2026-05-31。",
    tags: ["TRAE SOLO", "操作指南", "Louis", "2026-05-31"],
    url: "./content/trae-solo-guide-louis.doc",
  },
  {
    title: "MTP",
    category: "DOCX",
    summary: "作者：一只神秘二维生物。MTP 文档，可下载后用 Word 或 WPS 打开。",
    tags: ["MTP", "DOCX", "一只神秘二维生物"],
    url: "./content/mtp.docx",
  },
  {
    title: "Anthropic 技术报告研读",
    category: "PPT",
    summary: "作者：留风禾。Anthropic 技术报告研读演示文稿，整理 Agent 外部系统连接、MCP、Tool Search 与 Programmatic Tool Calling 等要点。",
    tags: ["Anthropic", "技术报告", "MCP", "Agent", "留风禾"],
    url: "./content/anthropic-technical-report-liu-fenghe.pptx",
  },
  {
    title: "Harness 工程科普",
    category: "PPT",
    summary: "作者：留风禾。Harness 工程科普演示文稿，可下载后用 PowerPoint 或 WPS 打开。",
    tags: ["Harness", "工程", "科普", "留风禾"],
    url: "./content/harness-engineering-science.pptx",
  },
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
    summary: "作者：一只神秘二维生物。Codex 安装教程文档，可下载后用 Word 或 WPS 打开。",
    tags: ["Codex", "安装", "教程", "DOCX"],
    url: "./content/codex-install-guide.docx",
  },
  {
    title: "Codex 基础命令速查",
    category: "网页资料",
    summary: "作者：嘠迷你。按指令、作用和适用场景整理 Codex 常用斜杠命令，覆盖新手入门、日常开发和风险管控。",
    tags: ["Codex", "命令", "斜杠指令", "新手入门"],
    url: "./content/codex-basic-commands.html",
  },
  {
    title: "Codex 终极 Debug 方法",
    category: "网页资料",
    summary: "作者：李猈。通过删除 .codex 下的 auth.json 和 config.toml，重新登录 OpenAI 账户来修复 Codex 初始化异常。",
    tags: ["Codex", "Debug", "登录", "配置重置"],
    url: "./content/codex-ultimate-debug.html",
  },
  {
    title: "Codex 独立多开窗口脚本",
    category: "BAT",
    summary: "用于启动多个互相隔离的 Codex 窗口，防止多对话互相影响。使用前请把脚本里的 C:\\Users\\fuyue\\.codex-win1/2/3 改成自己的本机路径。",
    tags: ["Codex", "多开", "隔离窗口", "BAT"],
    url: "./content/codex-isolated-windows.bat",
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

function getActionText(article) {
  if (article.category === "PDF") return "下载 PDF";
  if (article.category === "PPT") return "下载 PPT";
  if (article.category === "DOCX") return "下载 DOCX";
  if (article.category === "DOC") return "下载 DOC";
  if (article.category === "BAT") return "下载 BAT";
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

renderFilters();
renderArticles();

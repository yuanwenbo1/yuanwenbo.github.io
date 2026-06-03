(function () {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  const count = document.getElementById("search-count");

  if (!input || !results || !count) return;

  let posts = [];

  const normalize = (value) => (value || "").toString().toLowerCase().trim();

  const escapeHtml = (value) =>
    (value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const excerpt = (content, keyword) => {
    const text = (content || "").replace(/\s+/g, " ").trim();
    if (!text) return "";
    const lower = text.toLowerCase();
    const index = keyword ? lower.indexOf(keyword.toLowerCase()) : -1;
    const start = index > 60 ? index - 60 : 0;
    return text.slice(start, start + 170) + (text.length > start + 170 ? "..." : "");
  };

  const scorePost = (post, keyword) => {
    const title = normalize(post.title);
    const taxonomy = normalize(`${post.categories || ""} ${post.tags || ""}`);
    const content = normalize(post.content);
    let score = 0;

    if (title.includes(keyword)) score += 8;
    if (taxonomy.includes(keyword)) score += 4;
    if (content.includes(keyword)) score += 1;

    return score;
  };

  const render = (items, keyword) => {
    if (!keyword) {
      results.innerHTML = "";
      count.textContent = "输入关键词开始搜索";
      return;
    }

    count.textContent = `找到 ${items.length} 篇相关文章`;

    if (!items.length) {
      results.innerHTML = `
        <div class="empty-state">
          <h2>没有找到相关文章</h2>
          <p>可以换一个关键词，比如“自动化”“质量效能”“测试平台”。</p>
        </div>
      `;
      return;
    }

    results.innerHTML = items
      .map((item) => {
        const tags = [item.categories, item.tags].filter(Boolean).join(" · ");
        return `
          <article class="search-result">
            <time>${escapeHtml(item.date)}</time>
            <h2><a href="${item.url}">${escapeHtml(item.title)}</a></h2>
            <p>${escapeHtml(excerpt(item.content, keyword))}</p>
            <span>${escapeHtml(tags)}</span>
          </article>
        `;
      })
      .join("");
  };

  const runSearch = () => {
    const keyword = normalize(input.value);
    if (!keyword) {
      render([], "");
      return;
    }

    const matched = posts
      .map((post) => ({ ...post, score: scorePost(post, keyword) }))
      .filter((post) => post.score > 0)
      .sort((a, b) => b.score - a.score || b.date.localeCompare(a.date));

    render(matched, keyword);
  };

  const scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
  const indexUrl = new URL("../../search.json", scriptUrl);

  fetch(indexUrl)
    .then((response) => response.json())
    .then((data) => {
      posts = Array.isArray(data) ? data : [];
      input.disabled = false;
      input.addEventListener("input", runSearch);
      const query = new URLSearchParams(window.location.search).get("q");
      if (query) {
        input.value = query;
        runSearch();
      }
    })
    .catch(() => {
      count.textContent = "搜索索引加载失败，请稍后刷新页面。";
    });
})();

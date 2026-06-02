---
layout: base
title: 首页
---

<section class="hero">
  <div class="container hero-grid">
    <div>
      <p class="eyebrow">Testing · AI · Quality Engineering</p>
      <h1>把测试开发经验，沉淀成可复用的知识资产。</h1>
      <p class="lead">这里记录我的测试开发、AI 辅助测试、自动化测试框架、质量效能和项目复盘。希望这些笔记能帮自己持续成长，也能给同行一点可直接借鉴的经验。</p>
      <div class="hero-actions">
        <a class="button" href="{{ '/posts/' | relative_url }}">阅读文章</a>
        <a class="button secondary" href="{{ '/knowledge/' | relative_url }}">查看知识库</a>
      </div>
    </div>
    <aside class="hero-card">
      <p class="eyebrow">Focus</p>
      <h2>测试开发工程师</h2>
      <p>关注 AI 辅助测试、接口自动化、测试平台、机器人云平台、OpenAPI 和复杂业务链路质量保障。</p>
      <div class="stat-grid">
        <div class="stat">
          <strong>9年</strong>
          <span>测试与测试开发经验</span>
        </div>
        <div class="stat">
          <strong>AI</strong>
          <span>辅助测试实践</span>
        </div>
        <div class="stat">
          <strong>CI</strong>
          <span>自动化执行链路</span>
        </div>
        <div class="stat">
          <strong>OpenAPI</strong>
          <span>接口质量保障</span>
        </div>
      </div>
    </aside>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-title">
      <div>
        <p class="eyebrow">Topics</p>
        <h2>主要内容方向</h2>
      </div>
      <a href="{{ '/knowledge/' | relative_url }}">查看全部</a>
    </div>
    <div class="grid">
      <article class="topic-card">
        <h3>AI 辅助测试</h3>
        <p>需求拆解、用例生成、覆盖分析、缺陷复盘、测试报告和测试知识库沉淀。</p>
      </article>
      <article class="topic-card">
        <h3>自动化测试</h3>
        <p>Pytest、JMeter、Jenkins、接口/UI 自动化、CI 执行链路和测试工具平台。</p>
      </article>
      <article class="topic-card">
        <h3>质量效能</h3>
        <p>测试流程、测试资产、质量检查表、项目复盘和团队自动化落地实践。</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-title">
      <div>
        <p class="eyebrow">Latest</p>
        <h2>最新文章</h2>
      </div>
      <a href="{{ '/posts/' | relative_url }}">全部文章</a>
    </div>
    <div class="grid">
      {% for post in site.posts limit:3 %}
        <article class="post-card">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | truncate: 90 }}</p>
          {% if post.tags %}
            <div class="tag-list">
              {% for tag in post.tags limit:3 %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="profile-card">
      <p class="eyebrow">Sponsor</p>
      <h2>合作与推广</h2>
      <p>博客以个人知识沉淀为主，后续可以承接工具推荐、测试开发咨询、自动化测试方案交流、广告位和内容合作。</p>
      <div class="card-actions">
        <a class="button secondary" href="{{ '/sponsor/' | relative_url }}">查看合作入口</a>
      </div>
    </div>
  </div>
</section>

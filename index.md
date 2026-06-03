---
layout: base
title: 首页
---

<section class="hero">
  <div class="container hero-grid">
    <div>
      <p class="eyebrow">Testing · AI · Quality Engineering</p>
      <h1>测试开发 × AI 辅助测试 × 质量效能</h1>
      <p class="lead">记录测试开发、AI 辅助测试、自动化框架、测试平台和项目复盘。把零散经验沉淀成可复用的知识资产，也让 AI 更早参与测试规范、工具建设和质量分析。</p>
      <div class="hero-actions">
        <a class="button" href="{{ '/knowledge/' | relative_url }}">进入知识库</a>
        <a class="button secondary" href="{{ '/posts/' | relative_url }}">阅读文章</a>
      </div>
      <div class="hero-tags">
        <span>AI 辅助测试</span>
        <span>OpenAPI</span>
        <span>自动化框架</span>
        <span>测试平台</span>
      </div>
    </div>
    <aside class="hero-card">
      <p class="eyebrow">Profile</p>
      <h2>测试开发笔记</h2>
      <p>测试开发工程师，关注 AI 早介入的测试平台建设、测试资产沉淀和复杂业务链路质量保障。</p>
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

<section class="section feature-band">
  <div class="container">
    <div class="section-title">
      <div>
        <p class="eyebrow">Featured Series</p>
        <h2>精选系列</h2>
      </div>
      <a href="{{ '/knowledge/' | relative_url }}">查看知识地图</a>
    </div>
    <div class="feature-grid">
      <article class="feature-card large">
        <span>AI Native</span>
        <h3><a href="{{ '/posts/2026/06/02/ai-native-test-platform/' | relative_url }}">AI 早介入的测试平台建设思路</a></h3>
        <p>从工具、框架、用例、执行、报告和知识沉淀阶段，让 AI 持续参与测试平台建设。</p>
      </article>
      <article class="feature-card">
        <span>Architecture</span>
        <h3><a href="{{ '/posts/2026/06/02/test-platform-architecture-series/' | relative_url }}">渐进式测试平台架构</a></h3>
        <p>从小工具开始，逐步走向自动化框架、执行调度、报告分析和质量工程平台。</p>
      </article>
      <article class="feature-card">
        <span>Career</span>
        <h3><a href="{{ '/posts/2026/06/02/ai-era-test-engineer-opportunity/' | relative_url }}">AI 时代测试工程师的机会</a></h3>
        <p>代码门槛被拉平后，业务理解、质量判断和测试资产沉淀会变得更重要。</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-title">
      <div>
        <p class="eyebrow">Topics</p>
        <h2>主要内容方向</h2>
      </div>
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
        <h3>测试平台</h3>
        <p>从工具化、自动化框架到执行调度、质量看板和 AI Native 质量平台。</p>
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
      {% for post in site.posts limit:6 %}
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

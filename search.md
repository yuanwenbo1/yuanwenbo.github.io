---
layout: base
title: 搜索
description: 搜索测试开发、AI 测试、自动化测试和质量效能文章。
permalink: /search/
---

<section class="page-hero search-hero">
  <div class="container">
    <p class="eyebrow">Search</p>
    <h1>搜索文章</h1>
    <p class="lead">输入关键词，搜索标题、分类、标签和文章内容摘要。</p>
  </div>
</section>

<section class="section">
  <div class="container search-shell">
    <div class="search-box">
      <input id="search-input" type="search" placeholder="例如：AI 测试、OpenAPI、测试平台、用例评审" autocomplete="off" aria-label="搜索文章" disabled>
      <span id="search-count">搜索索引加载中...</span>
    </div>
    <div id="search-results" class="search-results"></div>
  </div>
</section>

<script src="{{ '/assets/js/search.js' | relative_url }}" defer></script>

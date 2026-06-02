---
layout: default
title: 文章
description: 按时间记录测试开发、AI 辅助测试、自动化测试和项目复盘。
permalink: /posts/
eyebrow: Articles
---

{% for post in site.posts %}
<article class="post-card">
  <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
  {% if post.tags %}
  <div class="tag-list">
    {% for tag in post.tags %}
    <span class="tag">{{ tag }}</span>
    {% endfor %}
  </div>
  {% endif %}
</article>
{% endfor %}

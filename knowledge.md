---
layout: base
title: 知识库
description: 把零散经验整理成长期可维护的测试开发知识地图。
permalink: /knowledge/
---

<section class="page-hero knowledge-hero">
  <div class="container">
    <p class="eyebrow">Knowledge Map</p>
    <h1>测试开发知识地图</h1>
    <p class="lead">按主题整理文章、清单、模板和项目复盘。文章页负责按时间发布，知识库负责按能力体系组织。</p>
  </div>
</section>

<section class="section">
  <div class="container knowledge-grid">
    <article class="knowledge-card highlight">
      <span>Testing Basics</span>
      <h2>软件测试方法论</h2>
      <p>从测试目标、测试层次、测试类型、用例设计和风险驱动理解测试工作的底层逻辑。</p>
      <ul>
        <li><a href="{{ '/posts/2026/06/03/software-testing-methodology/' | relative_url }}">软件测试方法论：从发现缺陷到控制质量风险</a></li>
        <li><a href="{{ '/posts/2026/06/03/software-testing-technology-system/' | relative_url }}">软件测试技术体系：测试工程师到底需要掌握哪些技术</a></li>
        <li><a href="{{ '/posts/2026/06/03/test-process-tradeoff-and-adaptation/' | relative_url }}">测试流程设计：如何在效率和质量之间做取舍</a></li>
        <li><a href="{{ '/posts/2026/06/03/multi-dimensional-test-design/' | relative_url }}">多维测试用例设计：从功能覆盖到风险覆盖</a></li>
        <li><a href="{{ '/posts/2026/06/03/testcase-review-and-traceability/' | relative_url }}">用例评审与覆盖追溯</a></li>
      </ul>
    </article>

    <article class="knowledge-card highlight">
      <span>AI Testing</span>
      <h2>AI 辅助测试</h2>
      <p>围绕 AI 如何参与需求、用例、脚本、执行、报告和知识沉淀。</p>
      <ul>
        <li><a href="{{ '/posts/2026/06/04/mcp-and-agent-skills/' | relative_url }}">MCP 协议与 Skill：AI Agent 如何连接工具和沉淀能力</a></li>
        <li><a href="{{ '/posts/2026/06/03/ai-testing-knowledge-engineering/' | relative_url }}">AI 测试不是提示词，而是测试知识工程</a></li>
        <li><a href="{{ '/posts/2026/06/02/ai-era-test-engineer-opportunity/' | relative_url }}">AI 能力大幅提升后，测试工程师的机会与挑战</a></li>
        <li><a href="{{ '/posts/2026/06/02/ai-testing-start/' | relative_url }}">为什么我要开始记录 AI 辅助测试</a></li>
        <li><a href="{{ '/posts/2026/06/02/ai-native-test-platform/' | relative_url }}">AI 早介入的测试平台建设思路</a></li>
        <li><a href="{{ '/posts/2026/06/03/ai-testing-system-governance/' | relative_url }}">AI 测试能力如何治理</a></li>
      </ul>
    </article>

    <article class="knowledge-card">
      <span>Automation</span>
      <h2>自动化测试</h2>
      <p>从传统脚本、框架设计到 AI 生成脚本和 Agent 执行语义化用例。</p>
      <ul>
        <li><a href="{{ '/posts/2026/06/03/multi-dimensional-test-design/' | relative_url }}">多维测试用例设计：从功能覆盖到风险覆盖</a></li>
        <li><a href="{{ '/posts/2026/06/03/testcase-review-and-traceability/' | relative_url }}">用例评审与覆盖追溯</a></li>
        <li><a href="{{ '/posts/2026/06/02/automation-testing-future/' | relative_url }}">自动化测试的发展方向：从脚本框架到 AI Agent</a></li>
        <li>Pytest 自动化框架</li>
        <li>JMeter 接口与性能测试</li>
        <li>Jenkins CI 自动执行</li>
      </ul>
    </article>

    <article class="knowledge-card">
      <span>OpenAPI</span>
      <h2>接口测试</h2>
      <p>沉淀对外接口、状态流转、幂等、回调、错误码和可观测性的测试方法。</p>
      <ul>
        <li><a href="{{ '/posts/2026/06/02/openapi-test-checklist/' | relative_url }}">OpenAPI 接口测试应该重点覆盖什么</a></li>
        <li><a href="{{ '/posts/2026/06/03/requirement-analysis-to-test-strategy/' | relative_url }}">从需求分析到测试策略</a></li>
        <li>鉴权与权限隔离</li>
        <li>状态流转与幂等性</li>
        <li>回调与异步通知</li>
      </ul>
    </article>

    <article class="knowledge-card wide">
      <span>Platform Architecture</span>
      <h2>渐进式测试平台架构</h2>
      <p>从小工具到质量工程平台，强调 AI 从早期就介入规范、设计和知识积累。</p>
      <ul class="link-columns">
        <li><a href="{{ '/posts/2026/06/02/test-platform-architecture-series/' | relative_url }}">总览：从工具到质量工程平台</a></li>
        <li><a href="{{ '/posts/2026/06/02/test-platform-stage-1-tools/' | relative_url }}">阶段一：先从测试工具化开始</a></li>
        <li><a href="{{ '/posts/2026/06/02/test-platform-stage-2-framework/' | relative_url }}">阶段二：自动化框架是平台的骨架</a></li>
        <li><a href="{{ '/posts/2026/06/02/test-platform-stage-3-execution-report/' | relative_url }}">阶段三：执行调度与测试报告</a></li>
        <li><a href="{{ '/posts/2026/06/02/test-platform-stage-4-assets-ai/' | relative_url }}">阶段四：测试资产与 AI 辅助测试</a></li>
      </ul>
    </article>

    <article class="knowledge-card">
      <span>Quality Assets</span>
      <h2>质量效能</h2>
      <p>把测试经验、风险场景、缺陷复盘和检查清单沉淀成团队资产。</p>
      <ul>
        <li><a href="{{ '/posts/2026/06/03/quality-feedback-loop/' | relative_url }}">从测试报告到缺陷复盘：建立质量反馈闭环</a></li>
        <li><a href="{{ '/posts/2026/06/03/collaboration-knowledge-base-for-qa/' | relative_url }}">协作和知识库如何服务质量保障</a></li>
        <li><a href="{{ '/posts/2026/06/02/quality-asset/' | relative_url }}">测试资产不是文档仓库，而是可复用的质量能力</a></li>
        <li>用例评审 checklist</li>
        <li>上线质量检查表</li>
        <li>缺陷复盘模板</li>
      </ul>
    </article>

    <article class="knowledge-card">
      <span>Project Review</span>
      <h2>项目经验沉淀</h2>
      <p>围绕真实业务场景整理测试设计、自动化建设和质量保障方法。</p>
      <ul>
        <li>机器人云平台任务链路</li>
        <li>OpenAPI 接口质量保障</li>
        <li>充电桩协议测试</li>
        <li>复杂业务状态机测试</li>
      </ul>
    </article>
  </div>
</section>

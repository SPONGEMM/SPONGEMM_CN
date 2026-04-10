# SPONGEMM Web Astro

SPONGEMM 官网的 Astro 重构版本。

当前仓库的目标是将原有 wiki.js 内容逐步迁移到 Astro，同时保留原始文档与教程内容的可访问性，并逐步统一站点的视觉风格与信息架构。

## 当前状态

- 已完成 Astro 项目初始化
- 已完成新版首页实现
- 已接入原有文档、教程、下载内容的 Astro 路由
- 已实现文档站式边栏布局
- 已保留原始 markdown 正文内容，不对原文档内容做改写

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

构建静态站点：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

## 目录说明

- `src/pages/`：Astro 页面入口
- `src/components/`：页面与布局组件
- `src/data/`：导航与首页数据
- `src/lib/`：legacy markdown 加载逻辑
- `public/`：静态资源与从原站镜像过来的附件
- `spongemm_cn_gitee/`：原始 wiki.js 导出内容，作为迁移参考源

## 迁移计划

目前已经完成到 Astro 的基础迁移，后续仍需推进以下工作：

1. 文档更新：继续梳理文档结构，完善边栏组织与页面导航体验
2. 教程更新：补齐教程入口组织、工作坊视频与案例页体验
3. 下载页更新：优化程序包、模块包、工具包的下载组织方式
4. 页面美化：继续统一首页与文档区的视觉风格，并完善响应式布局
5. SEO 搜索：补充站点 SEO 元信息、结构化内容和站内搜索能力

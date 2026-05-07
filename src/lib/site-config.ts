export const siteConfig = {
  // Site 基本信息
  title: "ShumRain Blog",
  description:
    "ShumRain 的个人博客，记录技术、生活与长期思考。",
  siteUrl: "https://shumrain-blog.shumrainchen.workers.dev",
  domains: ["shumrain-blog.shumrainchen.workers.dev"],

  // 品牌名（导航栏展示用）
  brand: "ShumRain",

  // 作者信息
  author: {
    name: "ShumRain",
    email: "",
    github: "ShumRain",
    twitterUsername: "",
    unsplash: "",
  },

  // 社交链接
  social: {
    github: "https://github.com/ShumRain",
    twitter: "",
    youtube: "",
    bilibili: "",
  },

  // AI 聊天相关文案（免费版首发不启用前端入口）
  ai: {
    chatTitle: "博客 AI 助手",
    chatSubtitle: "ShumRain Blog",
    welcomeText:
      "你好，欢迎来到 ShumRain Blog。",
    triggerText: "想聊聊吗？",
    triggerLabel: "AI 助手",
    placeholders: [
      "推荐几篇文章",
      "聊聊这个博客",
      "最近在写什么？",
      "有什么值得记录的？",
    ],
    topics: ["技术", "生活", "阅读", "记录"],
  },

  // SEO keywords
  keywords: [
    "ShumRain",
    "ShumRain Blog",
    "独立博客",
    "个人网站",
    "技术",
    "生活",
    "写作",
  ],

  // 免费版首发不启用统计和分析
  umamiWebsiteId: "" as const,
  umamiScriptUrl: "" as const,
  googleAnalyticsId: "" as const,
  analyticsApiUrl: "/api/analytics/hits",

  // 免费版首发不启用评论系统
  comments: {
    server: "",
    siteName: "ShumRain Blog",
    gravatarMirror: "",
  },

  beian: "",

  // 内容仓库（用于编辑链接）
  contentRepo: {
    owner: "ShumRain",
    repo: "blog",
    branch: "main",
    contentPath: "content/posts",
  },
} as const;

export const categoryMap = [
  { text: "notes", name: "随笔", isHome: true },
  { text: "code", name: "代码", isHome: true },
  { text: "life", name: "生活", isHome: true },
] as const;

export const articlePageSize = 16;
export const hotArticleViews = 5000;

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBottomNav } from "@/components/article-bottom-nav";
import { ArticleCopyright } from "@/components/article-copyright";
import { ArticleMeta } from "@/components/article-meta";
import { ArticleToc } from "@/components/article-toc";
import { ContentEnhancer } from "@/components/content-enhancer";
import { RouteTransitionComplete } from "@/components/route-transition-complete";
import {
  getAllPosts,
  getPostBySlug,
  getPostSiblings,
  getPostSummaryBySlug,
} from "@/lib/content/posts";
import { ScrollToTop } from "@/components/scroll-to-top";
import { categoryMap, siteConfig } from "@/lib/site-config";

const categoryNameMap = new Map<string, string>(
  categoryMap.map((item) => [item.text, item.name]),
);
export const dynamicParams = false;

function toAbsoluteUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const normalizedPath = url.startsWith("/") ? url : `/${url}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostSummaryBySlug(slug);
  if (!post) {
    return { title: "文章不存在" };
  }

  const articleUrl = `${siteConfig.siteUrl}/${post.slug}`;
  const coverUrl = post.cover ? toAbsoluteUrl(post.cover) : undefined;
  const publishedISO = new Date(post.dateTime).toISOString();

  const description = post.excerpt;
  const ogDescription = post.excerpt;

  // OG 图片带尺寸信息，提升社交卡片命中率
  const ogImages = coverUrl
    ? [{ url: coverUrl, alt: post.title, width: 1200, height: 630 }]
    : undefined;

  return {
    title: post.title,
    description,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: post.title,
      description: ogDescription,
      type: "article",
      publishedTime: publishedISO,
      modifiedTime: publishedISO,
      url: articleUrl,
      siteName: siteConfig.title,
      locale: "zh_CN",
      images: ogImages,
    },
    twitter: {
      card: coverUrl ? "summary_large_image" : "summary",
      title: post.title,
      description: ogDescription,
      ...(coverUrl ? { images: [coverUrl] } : {}),
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const siblings = getPostSiblings(slug);
  const canonicalUrl = `${siteConfig.siteUrl}/${post.slug}`;
  const primaryCategory = post.categories.find(
    (category) => category !== "hot" && categoryNameMap.has(category),
  );
  const primaryCategoryName = primaryCategory
    ? categoryNameMap.get(primaryCategory) ?? primaryCategory
    : undefined;
  const articleImageUrl = post.cover ? toAbsoluteUrl(post.cover) : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    inLanguage: "zh-CN",
    datePublished: new Date(post.dateTime).toISOString(),
    dateModified: new Date(post.dateTime).toISOString(),
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: articleImageUrl ? [articleImageUrl] : undefined,
    articleSection: primaryCategoryName,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.siteUrl,
      sameAs: [siteConfig.social.github],
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.title,
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/logo.svg`,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: siteConfig.siteUrl,
      },
      ...(primaryCategory
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: primaryCategoryName ?? primaryCategory,
              item: `${siteConfig.siteUrl}/category/${encodeURIComponent(primaryCategory)}`,
            },
          ]
        : []),
      {
        "@type": "ListItem",
        position: primaryCategory ? 3 : 2,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main className="mx-auto w-full max-w-[1220px] px-4 pb-12 pt-6 md:px-6">
      <RouteTransitionComplete />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="flex flex-col lg:flex-row lg:gap-12">
        <section className="min-w-0 flex-1 lg:max-w-[860px]">
          <ArticleMeta post={post} />
          <ContentEnhancer />

          <article className="article-body article-content mt-6 pb-6 lg:pb-12 ">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>

          <ArticleCopyright
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
          <ArticleBottomNav prev={siblings.prev} next={siblings.next} />
        </section>
        <ArticleToc headings={post.headings} />
      </div>
      <ScrollToTop />
    </main>
  );
}

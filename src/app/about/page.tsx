import type { Metadata } from "next";
import { RouteTransitionComplete } from "@/components/route-transition-complete";
import { siteConfig } from "@/lib/site-config";

export function generateMetadata(): Metadata {
  const canonical = `${siteConfig.siteUrl}/about`;
  return {
    title: "关于",
    description: `关于 ${siteConfig.author.name} 和这个博客。`,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `关于 | ${siteConfig.title}`,
      description: `关于 ${siteConfig.author.name} 和这个博客。`,
      type: "profile",
      url: canonical,
      siteName: siteConfig.title,
      locale: "zh_CN",
    },
  };
}

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[980px] px-4 pb-14 pt-8 md:px-8 md:pt-10">
      <RouteTransitionComplete />
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:p-8">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          About
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          {siteConfig.author.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
          这里是 {siteConfig.title}。它会先从一个干净的个人博客开始，
          慢慢记录技术、生活和那些值得反复回看的想法。
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            GitHub
          </a>
          <a
            href="/rss.xml"
            className="rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
          >
            RSS
          </a>
        </div>
      </section>
    </main>
  );
}

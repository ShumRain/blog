"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconCalendar } from "@/components/icons";
import type { PostItem } from "@/lib/content/types";
import { getPreviewImage } from "@/lib/content/utils";

interface ArticleCardProps {
  post: PostItem;
  priority?: boolean;
}

export function ArticleCard({
  post,
  priority = false,
}: ArticleCardProps) {
  const imageUrl = getPreviewImage(post.cover);
  const [loadedImageUrl, setLoadedImageUrl] = useState<string | null>(() =>
    imageUrl ? null : "",
  );
  const isLoaded = !imageUrl || loadedImageUrl === imageUrl;

  useEffect(() => {
    if (!imageUrl || loadedImageUrl === imageUrl) return;

    let active = true;
    const img = new window.Image();
    const markLoaded = () => {
      if (active) {
        setLoadedImageUrl(imageUrl);
      }
    };

    if (priority) {
      img.fetchPriority = "high";
    }

    img.onload = markLoaded;
    img.onerror = markLoaded;
    img.src = imageUrl;

    if (img.complete) {
      const timeoutId = window.setTimeout(markLoaded, 0);
      return () => {
        active = false;
        window.clearTimeout(timeoutId);
        img.onload = null;
        img.onerror = null;
      };
    }

    return () => {
      active = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl, loadedImageUrl, priority]);

  return (
    <article className="group flex h-full flex-col rounded-lg bg-white dark:bg-zinc-800 shadow-lg overflow-hidden">
      {/* 图片区域 */}
      <Link
        href={post.url}
        className="block relative h-60 w-full md:h-40 lg:h-40 flex-shrink-0 bg-zinc-100 dark:bg-neutral-900 overflow-hidden"
      >
        {/* 骨架屏 shimmer 动画 */}
        {!isLoaded && (
          <span className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-200/70 to-zinc-100 dark:from-neutral-900 dark:via-neutral-700/40 dark:to-neutral-900 bg-[length:200%_100%] animate-[shimmer_2.5s_ease-in-out_infinite]" />
        )}

        {imageUrl && (
          <span
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={`absolute inset-0 bg-cover bg-center duration-300 ease-in group-hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </Link>

      {/* 内容区域：标题 + 日期，在一个 flex 容器内 */}
      <div className="flex-1 flex flex-col px-6 py-5">
        <Link
          href={post.url}
          className="line-clamp-2 text-base leading-snug antialiased font-medium text-gray-800 dark:!text-slate-300 sm:text-base"
        >
          {post.title}
        </Link>

        {/* 日期栏：使用 mt-auto 推到最底部 */}
        <div className="mt-auto flex items-center pt-4 text-sm">
          <p className="flex items-center font-mono text-slate-500 dark:text-slate-400">
            <IconCalendar className="mr-1 h-3 w-3" />
            {post.formatShowDate}
          </p>
        </div>
      </div>
    </article>
  );
}

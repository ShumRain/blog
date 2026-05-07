"use client";

import Image from "next/image";
import { IconGitHub } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
const siteHostname = new URL(siteConfig.siteUrl).hostname.toUpperCase();

export function SiteFooter() {
  return (
    <footer className="site-footer mt-12 border-t border-zinc-200/80 py-6 dark:border-zinc-800/80">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-zinc-400 dark:text-zinc-500">
            <a href="https://www.cloudflare.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-600 dark:hover:text-zinc-300">
              <Image
                src="/icons/cloudflare-icon.svg"
                alt="Cloudflare"
                width={14}
                height={14}
                className="inline-block h-3.5 w-3.5 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
              Cloudflare
            </a>
            <span className="hidden md:inline text-zinc-300 dark:text-zinc-700">·</span>
            <span>
              Powered by{" "}
              <a href="https://github.com/cloudflare/vinext" target="_blank" rel="noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300">
                vinext
              </a>
            </span>
            <span className="hidden md:inline text-zinc-300 dark:text-zinc-700">·</span>
            <a
              href={`https://github.com/${siteConfig.contentRepo.owner}/${siteConfig.contentRepo.repo}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              <IconGitHub className="inline-block h-3.5 w-3.5" />
              Open Source
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-zinc-400 dark:text-zinc-500">
            <span>
              &copy; {new Date().getFullYear()}{" "}
              <a href={siteConfig.siteUrl} className="hover:text-zinc-600 dark:hover:text-zinc-300">
                {siteHostname}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

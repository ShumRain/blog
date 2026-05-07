import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeColorMeta } from "@/components/theme-color-meta";
import { RouteTransitionProgress } from "@/components/route-transition-progress";
import { getThemeBootstrapScript } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: siteConfig.siteUrl,
    types: {
      "application/rss+xml": `${siteConfig.siteUrl}/rss.xml`,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.title,
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.title,
  },
  applicationName: siteConfig.title,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const themeScript = getThemeBootstrapScript();

const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.title,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  inLanguage: "zh-CN",
  author: {
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.siteUrl,
    sameAs: [siteConfig.social.github],
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-pt-[60px]">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="manifest" href="/manifest.json" />
        <ThemeColorMeta />
      </head>
      <body className="flex min-h-screen flex-col antialiased pt-[60px]">
        <RouteTransitionProgress />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

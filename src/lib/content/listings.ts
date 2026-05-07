import { articlePageSize, categoryMap } from "@/lib/site-config";
import { parsePositivePage } from "@/lib/utils";
import { getAllPosts } from "./posts";
import type { PostItem } from "./types";

const categoryNameMap = new Map<string, string>(
  categoryMap.map((item) => [item.text, item.name]),
);

const EMPTY_HITS_MAP = new Map<string, number>();
export interface PostListingResult {
  category?: string;
  categoryName?: string;
  posts: PostItem[];
  visiblePosts: PostItem[];
  hitsMap: Map<string, number>;
  hitsLoading: boolean;
  requestedPage: number;
  page: number;
  pageTotal: number;
}

export function isKnownCategory(category: string): boolean {
  return categoryNameMap.has(category);
}

export function getCategoryName(category: string): string {
  return categoryNameMap.get(category) ?? category;
}

export async function getPostListing(params: {
  category?: string;
  pageParam?: string;
}): Promise<PostListingResult> {
  const category = params.category;
  const requestedPage = parsePositivePage(params.pageParam);
  const allPosts = getAllPosts();

  const posts =
    category
      ? allPosts.filter((post) => post.categories.includes(category))
      : allPosts;

  const pageTotal = Math.max(1, Math.ceil(posts.length / articlePageSize));
  const page = Math.min(requestedPage, pageTotal);
  const start = (page - 1) * articlePageSize;

  return {
    category,
    categoryName: category ? getCategoryName(category) : undefined,
    posts,
    visiblePosts: posts.slice(start, start + articlePageSize),
    hitsMap: EMPTY_HITS_MAP,
    hitsLoading: false,
    requestedPage,
    page,
    pageTotal,
  };
}

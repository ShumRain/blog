import type { PostItem } from "@/lib/content/types";
import { ArticleListClient } from "./article-list-client";

interface ArticleListProps {
  posts: PostItem[];
}

export function ArticleList({ posts }: ArticleListProps) {
  return <ArticleListClient posts={posts} />;
}

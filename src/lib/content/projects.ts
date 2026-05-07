import type { SearchDocument } from "@shumrain/search-core";
import githubResumeJson from "../../../data/github-resume.json";

export interface ProjectData {
  name: string;
  url: string;
  description: string;
  tags?: string[];
}

export interface ProjectSearchDocument extends SearchDocument {
  name: string;
  description: string;
  tags: string[];
}

/**
 * 获取项目搜索文档
 */
export function getProjectSearchDocuments(): ProjectSearchDocument[] {
  const projects = githubResumeJson.projects as unknown as ProjectData[];

  return projects.map((project, index) => ({
    id: `project-${index}`,
    title: project.name,
    url: project.url,
    excerpt: project.description,
    content: `${project.name} ${project.description} ${project.tags?.join(" ") || ""}`,
    categories: project.tags || [],
    dateTime: 0, // 项目没有时间戳
    name: project.name,
    description: project.description,
    tags: project.tags || [],
  }));
}

/**
 * 获取工作经历搜索文档
 */
export function getExperienceSearchDocuments(): ProjectSearchDocument[] {
  const experience = githubResumeJson.experience as unknown as Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;

  return experience.map((exp, index) => ({
    id: `exp-${index}`,
    title: `${exp.title} @ ${exp.company}`,
    url: githubResumeJson.profile.social.blog || "https://shumrain-blog.shumrainchen.workers.dev",
    excerpt: exp.description,
    content: `${exp.title} ${exp.company} ${exp.period} ${exp.description}`,
    categories: [exp.company],
    dateTime: 0,
    name: `${exp.title} @ ${exp.company}`,
    description: exp.description,
    tags: [exp.company, exp.period],
  }));
}

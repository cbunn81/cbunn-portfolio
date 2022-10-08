import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type ProjectType = {
  metadata: {
    id: number;
    featured: boolean;
    title: string;
    githubURL: string;
    image: string;
    description: string;
    technologies: string[];
  };
  mdxSource: MDXRemoteSerializeResult;
};

"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const markdown = `
# Hello World

This is a **bold** text with a link to [GitHub](https://github.com).

## Task List
- [x] Task 1
- [ ] Task 2
`;

const ShowMarkdown = () => {
  return (
    <>
      <div>123</div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {markdown}
      </ReactMarkdown>
    </>
  );
};

export default ShowMarkdown;

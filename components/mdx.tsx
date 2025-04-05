/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { highlight } from "sugar-high";
import remarkGfm from "remark-gfm";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

function Blockquote(props: any) {
  return (
    <blockquote
      className="bg-blue-200 dark:bg-blue-950 dark:bg-opacity-30 bg-opacity-30 p-4 rounded-md blockquote"
      {...props}
    />
  );
}

function Code({ children, ...props }: any) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function CustomLink(props: any) {
  const href = props.href;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with and
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: any) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

function Table({ children, ...props }: any) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props}>
        {children}
      </table>
    </div>
  );
}

function TableHead({ children, ...props }: any) {
  return (
    <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
      {children}
    </thead>
  );
}

function TableBody({ children, ...props }: any) {
  return (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700" {...props}>
      {children}
    </tbody>
  );
}

function TableRow({ children, ...props }: any) {
  return <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50" {...props}>{children}</tr>;
}

function TableHeader({ children, ...props }: any) {
  return (
    <th
      className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
      {...props}
    >
      {children}
    </th>
  );
}

function TableCell({ children, ...props }: any) {
  return (
    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200" {...props}>
      {children}
    </td>
  );
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  img: RoundedImage,
  a: CustomLink,
  code: Code,
  blockquote: Blockquote,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: TableHeader,
  td: TableCell,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={options}
    />
  );
}
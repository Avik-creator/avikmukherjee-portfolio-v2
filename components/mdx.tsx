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
      className="bg-neutral-800/30 border-l-2 border-neutral-600 pl-4 py-2 my-4 italic text-neutral-300"
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
      <Link href={href} {...props} className="text-stone-300 underline decoration-stone-400 decoration-[0.5px] underline-offset-4 transition-colors hover:text-stone-200 hover:decoration-stone-200">
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} className="text-stone-300 underline decoration-stone-400 decoration-[0.5px] underline-offset-4 transition-colors hover:text-stone-200 hover:decoration-stone-200" />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} className="text-stone-300 underline decoration-stone-400 decoration-[0.5px] underline-offset-4 transition-colors hover:text-stone-200 hover:decoration-stone-200" />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg my-4" {...props} />;
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
    const className = level === 1 
      ? "text-neutral-100 text-xl font-medium mt-8 mb-4" 
      : level === 2 
      ? "text-neutral-100 text-lg font-medium mt-6 mb-3"
      : "text-neutral-100 font-medium mt-4 mb-2";
    
    return React.createElement(
      `h${level}`,
      { id: slug, className },
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

function Paragraph({ children, ...props }: any) {
  return (
    <p className="text-neutral-400 my-4 leading-relaxed" {...props}>
      {children}
    </p>
  );
}

function List({ children, ...props }: any) {
  return (
    <ul className="text-neutral-400 my-4 ml-6 list-disc space-y-1" {...props}>
      {children}
    </ul>
  );
}

function OrderedList({ children, ...props }: any) {
  return (
    <ol className="text-neutral-400 my-4 ml-6 list-decimal space-y-1" {...props}>
      {children}
    </ol>
  );
}

function ListItem({ children, ...props }: any) {
  return (
    <li className="text-neutral-400" {...props}>
      {children}
    </li>
  );
}

function Strong({ children, ...props }: any) {
  return (
    <strong className="text-neutral-200 font-medium" {...props}>
      {children}
    </strong>
  );
}

function Table({ children, ...props }: any) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-neutral-700" {...props}>
        {children}
      </table>
    </div>
  );
}

function TableHead({ children, ...props }: any) {
  return (
    <thead className="bg-neutral-800" {...props}>
      {children}
    </thead>
  );
}

function TableBody({ children, ...props }: any) {
  return (
    <tbody className="divide-y divide-neutral-700" {...props}>
      {children}
    </tbody>
  );
}

function TableRow({ children, ...props }: any) {
  return <tr className="hover:bg-neutral-800/50" {...props}>{children}</tr>;
}

function TableHeader({ children, ...props }: any) {
  return (
    <th
      className="px-4 py-3 text-left text-xs font-medium text-neutral-300 uppercase tracking-wider"
      {...props}
    >
      {children}
    </th>
  );
}

function TableCell({ children, ...props }: any) {
  return (
    <td className="px-4 py-3 whitespace-nowrap text-sm text-neutral-400" {...props}>
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
  p: Paragraph,
  ul: List,
  ol: OrderedList,
  li: ListItem,
  strong: Strong,
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
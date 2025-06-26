import BlogItem from '@/components/blog/blog-item';
import { getAllPosts } from '@/lib/mdx';

interface Props {
  length?: number;
}

export default async function BlogList({ length }: Props) {
  const posts = await getAllPosts();

  return (
    <ul className="m-auto flex flex-col gap-1">
      {posts.slice(0, length ?? posts.length).map((post) => (
        <BlogItem
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
        />
      ))}
    </ul>
  );
}
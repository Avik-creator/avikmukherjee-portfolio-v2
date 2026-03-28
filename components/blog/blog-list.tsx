import BlogListClient from './blog-list-client';
import { getAllPosts } from '@/lib/utils/mdx';

interface Props {
  length?: number;
}

export default async function BlogList({ length }: Props) {
  const posts = await getAllPosts();
  const displayPosts = posts.slice(0, length ?? posts.length);

  // Group posts by year on the server
  interface GroupedPosts {
    [year: string]: typeof displayPosts;
  }

  const groupedPosts: GroupedPosts = {};
  let postIndex = 0;

  displayPosts.forEach((post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!groupedPosts[year]) {
      groupedPosts[year] = [];
    }
    groupedPosts[year].push({ ...post, _index: postIndex++ });
  });

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(groupedPosts).sort((a, b) => parseInt(b) - parseInt(a));

  return <BlogListClient groupedPosts={groupedPosts} sortedYears={sortedYears} />;
}
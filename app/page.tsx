import { sanityFetch } from "../sanity/lib/sanityFetch";
import HomePage from "./_components/home-page";
import { sortedPostsQuery } from "../sanity/lib/queries";
import { IPost } from "../types/posts";

async function getPosts() {
  const posts = await sanityFetch<IPost[]>({ query: sortedPostsQuery });

  return posts;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const posts = await getPosts();
  // Forward fetched data to your Client Component
  return <HomePage posts={posts} />;
}

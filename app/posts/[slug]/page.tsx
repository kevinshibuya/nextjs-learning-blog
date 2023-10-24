import { client } from "../../../sanity/lib/client";
import { postPathsQuery, postQuery } from "../../../sanity/lib/queries";
import { sanityFetch } from "../../../sanity/lib/sanityFetch";
import { IPost } from "../../../types/posts";
import Post from "../../_components/post-page";

export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

async function getPostData(params: any) {
  const posts = await sanityFetch<IPost>({ query: postQuery, params });

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await getPostData(params);
  // console.log(params);

  return <Post postData={post} />;
}

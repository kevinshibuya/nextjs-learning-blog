import Link from "next/link";
import Image from "next/image";
import BlockConverter from "../../_components/block-converter";
import PostHeader from "../../_components/postHeader/postHeader";
import { client } from "../../../sanity/lib/client";
import { postPathsQuery, postQuery } from "../../../sanity/lib/queries";
import { sanityFetch } from "../../../sanity/lib/sanityFetch";
import { IPost } from "../../../types/posts";
import utilStyles from "../../../styles/utils.module.scss";

export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

async function getPostData(params: any) {
  const posts = await sanityFetch<IPost>({ query: postQuery, params });

  return posts;
}

export async function generateMetadata({ params }) {
  const post = await getPostData(params);

  return {
    title: post.title,
  };
}

export default async function Page({ params }: { params: any }) {
  const post = await getPostData(params);

  return (
    <>
      <article>
        <PostHeader post={post} />
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.imageContainer}>
          <Image
            src={post.mainImage.asset.url}
            fill={true}
            alt={`${post.author.name} - ${post.title}`}
            className={utilStyles.image}
            priority
          />
        </div>
        <BlockConverter postData={post} />
      </article>
      <div className="backToHome">
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}

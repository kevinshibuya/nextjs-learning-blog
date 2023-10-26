import Link from "next/link";
import Image from "next/image";
import PostHeader from "./_components/postHeader/postHeader";
import { sanityFetch } from "../sanity/lib/sanityFetch";
import { sortedPostsQuery } from "../sanity/lib/queries";
import { IPost } from "../types/posts";
import styles from "./index.module.scss";
import utilStyles from "../styles/utils.module.scss";

async function getPosts() {
  const posts = await sanityFetch<IPost[]>({ query: sortedPostsQuery });

  return posts;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const posts = await getPosts();
  // Forward fetched data to your Client Component
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {posts.map((post, index) => (
          <li key={post.slug.current}>
            {index !== 0 ? <div className={utilStyles.divisor}></div> : ""}
            <div className={utilStyles.listItem}>
              <Link
                href={`/posts/${post.slug.current}`}
                className={styles.cardLink}
              >
                <PostHeader post={post} />
                <h1>{post.title}</h1>
                <div className={utilStyles.imageContainer}>
                  <Image
                    src={post.mainImage.asset.url}
                    fill={true}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 70vw"
                    alt={post.mainImage.alt}
                    className={utilStyles.image}
                    priority
                  />
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

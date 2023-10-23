import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../utils/posts";
import styles from "./index.module.scss";
import utilStyles from "../styles/utils.module.scss";
import { IPost } from "../types/posts";
import PostHeader from "../components/postHeader";

export default function Home({ posts }: { posts: IPost[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          This blog will summarize my learning journey with Next.js, all study
          topics will become blog posts, where I'll try my best to explain the
          concepts of what I just learned.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map((post, index) => {
            return (
              <div key={post._id}>
                {index !== 0 ? <div className={utilStyles.divisor}></div> : ""}
                <li className={utilStyles.listItem}>
                  <Link href={`/posts/${post._id}`} className={styles.cardLink}>
                    <PostHeader post={post} home />
                    <h1>{post.title}</h1>
                    <div className={utilStyles.imageContainer}>
                      <Image
                        src={post.image.asset.url}
                        fill={true}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 70vw"
                        alt={`${post.author.name} - ${post.title}`}
                        className={utilStyles.image}
                        priority
                      />
                    </div>
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
};

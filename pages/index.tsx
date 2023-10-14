import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPostsData } from "../utils/posts";
import { IPost } from "../types/posts";
import { GetStaticProps } from "next";

export default function Home({ posts }: { posts: IPost[] }) {
  console.log(posts);
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
          {posts.map(({ _id, date, title }) => (
            <li className={utilStyles.listItem} key={_id}>
              <Link href={`/posts/${_id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
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

import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../utils/posts";
import styles from "./index.module.scss";
import utilStyles from "../styles/utils.module.scss";
import { IPost } from "../types/posts";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Home({ posts }: { posts: IPost[] }) {
  const { asPath } = useRouter();

  const handleShare = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    post: IPost
  ) => {
    event.preventDefault();

    const shareData = {
      title: `${post.author.name} - ${post.title}`,
      url: window.location.origin + asPath,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(
        `${window.location.origin + asPath}posts/${post._id}`
      );
      toast("🗒️ Copied to clipboard.");
    }
  };

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
              <>
                {index !== 0 ? <div className={utilStyles.divisor}></div> : ""}
                <li className={utilStyles.listItem} key={post._id}>
                  <Link href={`/posts/${post._id}`} className={styles.cardLink}>
                    <header className={styles.cardHeader}>
                      <div className={styles.firstSection}>
                        <Image
                          src={post.author.image.asset.url}
                          className={utilStyles.borderCircle}
                          height={24}
                          width={24}
                          alt={`${post.author.name} profile picture.`}
                        />
                        <h6>{post.author.name}</h6>
                        <span>·</span>
                        <Date dateString={post.date} />
                      </div>
                      <button
                        className={styles.shareButton}
                        onClick={(event) => handleShare(event, post)}
                      >
                        <AiOutlineShareAlt size={"1.5em"} />
                      </button>
                    </header>
                    <h1>{post.title}</h1>
                    <div className={styles.imageContainer}>
                      <Image
                        src={post.image.asset.url}
                        fill={true}
                        alt={`${post.author.name} - ${post.title}`}
                        className={styles.image}
                        priority
                      />
                    </div>
                  </Link>
                </li>
              </>
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

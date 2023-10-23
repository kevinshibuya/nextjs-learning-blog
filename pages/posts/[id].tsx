import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout/layout";
import { getAllPostIds, getPostData } from "../../utils/posts";
import utilStyles from "../../styles/utils.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";
import { IPost } from "../../types/posts";
import { PortableText } from "@portabletext/react";
import PostHeader from "../../components/postHeader/postHeader";

export default function Post({ postData }: { postData: IPost }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <PostHeader post={postData} />
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.imageContainer}>
          <Image
            src={postData.image.asset.url}
            fill={true}
            alt={`${postData.author.name} - ${postData.title}`}
            className={utilStyles.image}
            priority
          />
        </div>
        <PortableText value={postData.content} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);

  return {
    props: {
      postData,
    },
  };
};

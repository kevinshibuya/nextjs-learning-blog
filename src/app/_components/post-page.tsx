import Image from "next/image";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.scss";
import { IPost } from "../../types/posts";
import { PortableText } from "@portabletext/react";
import PostHeader from "../../components/postHeader/postHeader";

export default function Post({ postData }: { postData: IPost }) {
  return (
    <Layout>
      <article>
        <PostHeader post={postData} />
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.imageContainer}>
          <Image
            src={postData.mainImage.asset.url}
            fill={true}
            alt={`${postData.author.name} - ${postData.title}`}
            className={utilStyles.image}
            priority
          />
        </div>
        <PortableText value={postData.body} />
      </article>
    </Layout>
  );
}

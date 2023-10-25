import Image from "next/image";
import Layout from "../../components/layout/layout";
import utilStyles from "../../styles/utils.module.scss";
import { IPost } from "../../types/posts";
import PostHeader from "../../components/postHeader/postHeader";
import BlockConverter from "./block-converter";

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
        <BlockConverter postData={postData} />
      </article>
    </Layout>
  );
}

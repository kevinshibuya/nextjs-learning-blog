import Image from "next/image";
import Date from "../components/date";
import { IPost } from "../types/posts";
import styles from "./postHeader.module.scss";
import utilStyles from "../styles/utils.module.scss";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type PageHeaderProps = {
  post: IPost;
  home?: boolean;
};

export default function PostHeader({ post, home }: PageHeaderProps) {
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
        home
          ? `${window.location.origin + asPath}posts/${post._id}`
          : `${window.location.origin + asPath}`
      );
      toast("🗒️ Copied to clipboard.");
    }
  };

  return (
    <header className={styles.cardHeader}>
      <div className={styles.container}>
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
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillHome,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineArrowUp,
} from "react-icons/ai";

type LayoutProps = {
  children: string | JSX.Element | JSX.Element[];
  home?: boolean;
};

const name = "Kevin Shibuya";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }: LayoutProps) {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpeg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.section}>
            <p>© 2023 Kevin Shibuya</p>
          </div>
          <div className={styles.section}>
            <h1>Current Projects</h1>
            <Link
              href="https://shibuya-nextjs-tutorial.vercel.app/"
              target="_blank"
            >
              Next.js Learning Blog
            </Link>
          </div>
          <div className={styles.section}>
            <h1>Jump to</h1>
            <Link href="/">
              <AiFillHome size={"0.9rem"} />
              Home
            </Link>
            <a onClick={scrollTop}>
              <AiOutlineArrowUp size={"0.9rem"} />
              To top
            </a>
          </div>
          <div className={styles.section}>
            <h1>Reach out</h1>
            <Link
              href="https://www.linkedin.com/in/kevin-shibuya/"
              target="_blank"
            >
              <AiFillLinkedin size={"0.9rem"} />
              LinkedIn
            </Link>
            <Link href="https://github.com/kevinshibuya" target="_blank">
              <AiFillGithub size={"0.9rem"} />
              Github
            </Link>
            <Link href="mailto:kevinshibuya@hotmail.com?subject=Great website!&body=Hey Kevin, reaching out to...">
              <AiFillMail size={"0.9rem"} />
              Email
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

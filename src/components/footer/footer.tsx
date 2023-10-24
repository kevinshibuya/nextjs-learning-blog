"use client";

import Link from "next/link";
import {
  AiFillGithub,
  AiFillHome,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import styles from "./footer.module.scss";

export default function Footer() {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer className={styles.footer}>
      {/* <div className={styles.footerBackground}></div> */}
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
  );
}

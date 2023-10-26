import {
  AiFillGithub,
  AiFillHome,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import styles from "./footer.module.scss";
import ToTop from "../to-top";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <p>© 2023 Kevin Shibuya</p>
        </div>
        <div className={styles.section}>
          <h1>Current Projects</h1>
          <a
            href="https://shibuya-nextjs-learning-blog.vercel.app/"
            target="_blank"
          >
            Next.js Learning Blog
          </a>
        </div>
        <div className={styles.section}>
          <h1>Jump to</h1>
          <Link href="/">
            <AiFillHome size={"0.9rem"} />
            Home
          </Link>
          <ToTop />
        </div>
        <div className={styles.section}>
          <h1>Reach out</h1>
          <a href="https://www.linkedin.com/in/kevin-shibuya/" target="_blank">
            <AiFillLinkedin size={"0.9rem"} />
            LinkedIn
          </a>
          <a href="https://github.com/kevinshibuya" target="_blank">
            <AiFillGithub size={"0.9rem"} />
            Github
          </a>
          <a href="mailto:kevinshibuya@hotmail.com?subject=Great website!&body=Hey Kevin, reaching out to...">
            <AiFillMail size={"0.9rem"} />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

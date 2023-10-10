import Head from "next/head";
import Link from "next/link";
import styles from "../components/layout.module.scss";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page not found!</title>
      </Head>
      <h1>404 - Page Not Found</h1>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  );
}

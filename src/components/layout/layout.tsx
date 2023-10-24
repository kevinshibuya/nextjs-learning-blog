"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./layout.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Footer from "../footer/footer";

type LayoutProps = {
  children: string | JSX.Element | JSX.Element[] | ReactNode;
  home?: boolean;
};

const name = "Kevin Shibuya";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }: LayoutProps) {
  return (
    <>
      <div className={styles.container}>
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
      <Footer />
    </>
  );
}

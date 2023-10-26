import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../../../public/images/logo.png";
import Link from "next/link";
import MenuButton from "./menu-button";

export default function Header() {
  return (
    <>
      <div className={styles.headerPlaceholder}></div>
      <header className={styles.container}>
        <nav>
          <div className={styles.headerSection}>
            <MenuButton />
            <Link href="/">
              <Image src={logo} alt="Shibuya's Next.js Learning Blog Logo" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

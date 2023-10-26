"use client";

import { AiOutlineMenu } from "react-icons/ai";
import styles from "./header.module.scss";

export default function MenuButton() {
  return (
    <button className={styles.menuButton} aria-label="Menu button">
      <AiOutlineMenu size={"1.75em"} />
    </button>
  );
}

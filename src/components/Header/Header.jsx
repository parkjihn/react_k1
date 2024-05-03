import React from "react";
import styles from "../Header/Header.module.css";
import { ReactComponent as Logo } from "./logo.svg";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.headerList}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contract</li>
        </ul>
      </div>
      <div className={styles.headerButton}>
          <button>Связаться</button>
        </div>
    </div>
  );
}

export default Header;

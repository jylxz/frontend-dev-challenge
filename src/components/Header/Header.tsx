import React from "react";
import BeaconLogo from "../../assets/logo.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <BeaconLogo />
      </div>
      BEACON
    </header>
  );
}

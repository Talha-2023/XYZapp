import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className={styles.logo_cont}>
      <div className={styles.logo_word}>XYZ Apps</div>
      <div className={styles.logo_design}>
        <div className={styles.orange_dot}></div>
        <div className={styles.purple_dot}></div>
        <div className={styles.aqua_dot}></div>
      </div>
    </div>
  );
};

export default Logo;

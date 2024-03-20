import React from "react";
import styles from "./DeviderLine.module.css";
const DeviderLine = () => {
  return (
    <div className={styles.line_container}>
      <div className={styles.orange}></div>
      <div className={styles.purple}></div>
      <div className={styles.aqua}></div>
    </div>
  );
};

export default DeviderLine;

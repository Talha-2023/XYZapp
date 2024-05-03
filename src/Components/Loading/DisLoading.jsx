import React from "react";
import styles from "./DisLoading.module.css";
const DisLoading = () => {
  return (
    <div className={`${styles.app_discription}`}>
      <div className={`${styles.img_container} ${styles.loading}`}></div>
      <div className={`${styles.lines} ${styles.loading}`}></div>
      <div className={`${styles.lines} ${styles.loading}`}></div>
      <div className={`${styles.lines} ${styles.loading}`}></div>
      <div className={`${styles.lines} ${styles.loading}`}></div>
      <div className={`${styles.lines} ${styles.loading}`}></div>
      <div className={`${styles.lines} ${styles.loading}`}></div>
      <div className={`${styles.lines} ${styles.loading}`}></div>
      <div className={`${styles.lines} ${styles.loading}`}></div>
    </div>
  );
};

export default DisLoading;

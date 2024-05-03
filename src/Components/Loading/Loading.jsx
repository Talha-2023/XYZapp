import React from "react";
import styles from "./Loading.module.css";
import Logo from "../Logo/Logo";
const Loading = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.from}>
        <p>From</p>
        <h2>TALHA</h2>
      </div>
    </div>
  );
};

export default Loading;

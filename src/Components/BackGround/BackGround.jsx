import React from "react";
import styles from "./BackGround.module.css";
import PartBg from "./PartBg";
const BackGround = () => {
  return (
    <div className={styles.MainBgCont}>
      <div className={styles.Group_MainBgCont}>
        <div className={styles.Part1_GP_Main}></div>
        <PartBg></PartBg>
        <PartBg></PartBg>
        <PartBg></PartBg>
      </div>
    </div>
  );
};

export default BackGround;

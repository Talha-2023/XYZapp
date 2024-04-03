import React from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import styles from "./AppsDescriptionSection2.module.css";
const AppsDescriptionSection2 = ({ discription }) => {
  return (
    <div className={styles.app_discription}>
      <div className={styles.img_container}>
        <img src="BodyAndFitness2.png" alt="" />
        <div className={styles.gif_shadow}></div>
      </div>
      <div className={styles.discription}>
        <p className={styles.dis}>
          <FaVolumeHigh style={{ color: "aqua", fontSize: "20px" }} />
          {discription}
        </p>
      </div>
      <p className={styles.colen}>"</p>
      <p className={styles.pattern}>
        .....x.....
        <br />
        x..........
        <br />
        ...........
        <br />
        .........x.
        <br />
        .....x.....
      </p>
    </div>
  );
};

export default AppsDescriptionSection2;

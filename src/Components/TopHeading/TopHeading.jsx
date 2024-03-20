import React from "react";
import styles from "./TopHeading.module.css";
import { ImAccessibility } from "react-icons/im";
import { ImAddressBook } from "react-icons/im";
import { ImAirplane } from "react-icons/im";
import { ImAlarm } from "react-icons/im";
import { ImBlogger } from "react-icons/im";
import { ImBook } from "react-icons/im";
import { ImBullhorn } from "react-icons/im";

const TopHeading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Web Apps By</p>
        <div className={styles.color}>Talha </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.small_para}>
          <p>Calculate, Convert, Compare..</p>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <ImAccessibility />
          </div>
          <div className={styles.icon}>
            <ImAddressBook />
          </div>
          <div className={styles.icon}>
            <ImAirplane />
          </div>
          <div className={styles.icon}>
            <ImAlarm />
          </div>
          <div className={styles.icon}>
            <ImBlogger />
          </div>
          <div className={styles.icon}>
            <ImBook />
          </div>
          <div className={styles.icon}>
            <ImBullhorn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeading;

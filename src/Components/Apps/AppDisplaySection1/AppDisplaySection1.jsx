import React from "react";
import styles from "./AppDisplaySection1.module.css";
import { TbClick } from "react-icons/tb";
import AppCard from "../AppCard/AppCard";

const AppDisplaySection1 = () => {
  return (
    <div className={styles.app_container}>
      <div className={styles.top_section}>
        <div className={styles.heading}>Body and Fitness:</div>
        <div className={styles.logo_design}>
          <div className={styles.orange_dot}></div>
          <div className={styles.purple_dot}></div>
          <div className={styles.aqua_dot}></div>
        </div>
        <div className={styles.know_me}>
          Know Me &nbsp; <TbClick />
        </div>
      </div>
      <div className={styles.apps_cards}>
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    </div>
  );
};

export default AppDisplaySection1;

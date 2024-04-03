import React from "react";
import styles from "./AppCard.module.css";
import { PiCalculatorLight } from "react-icons/pi";

const AppCard = ({ appicon, appname }) => {
  return (
    <div className={styles.app}>
      <div className={styles.icon}>{appicon}</div>

      <p>{appname}</p>
    </div>
  );
};

export default AppCard;

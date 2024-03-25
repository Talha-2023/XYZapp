import React from "react";
import styles from "./AppCard.module.css";
import { PiCalculatorLight } from "react-icons/pi";

const AppCard = () => {
  return (
    <div className={styles.app}>
      <div className={styles.icon}>
        <PiCalculatorLight />
      </div>

      <p>BMI Calculator</p>
    </div>
  );
};

export default AppCard;

import React from "react";
import styles from "./AppCard.module.css";
import { Link } from "react-router-dom";

const AppCard = ({ appicon, appname }) => {
  const path = appname.replace(/\s/g, "");
  return (
    <Link to={`/page2/${path}`}>
      <div className={styles.app}>
        <div className={styles.icon}>{appicon}</div>
        <p>{appname}</p>
      </div>
    </Link>
  );
};

export default AppCard;

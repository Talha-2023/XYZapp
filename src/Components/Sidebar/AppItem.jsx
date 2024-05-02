import React from "react";
import { Link } from "react-router-dom";
import styles from "./AppItem.module.css";
import { useParams } from "react-router-dom";

const AppItem = ({ name, icon }) => {
  const path = name.replace(/\s/g, "");
  let { cardName } = useParams();

  const classActive = path === cardName ? styles.active : styles.sidebar_apps;

  return (
    <Link className={classActive} to={`/page2/${path}`}>
      <div className={styles.app_icon}> {icon}</div>
      <p className={styles.app_name}> {name}</p>
    </Link>
  );
};

export default AppItem;

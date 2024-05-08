import React from "react";
import styles from "./AppCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HandleAppName } from "../../../Store/Features/AppName";

const AppCard = ({ app }) => {
  const dispatch = useDispatch();
  const appname = app.app_name;
  const appicon = app.icon;

  const path = appname.replace(/\s/g, "");
  return (
    <Link to={`/page2/${path}`}>
      <div className={styles.app} onClick={() => dispatch(HandleAppName(app))}>
        <div className={styles.icon}>{appicon}</div>
        <p>{appname}</p>
      </div>
    </Link>
  );
};

export default AppCard;

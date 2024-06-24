import React from "react";
import styles from "./AppCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HandleAppName } from "../../../Store/Features/AppName";
import { HandleAppIcon } from "../../../Store/Features/AppIcon";

const AppCard = ({ app }) => {
  const dispatch = useDispatch();
  const appname = app.app_name;
  const appicon = app.icon;
  const applogo = app.app_logo;
  console.log(applogo);
  const path = appname.replace(/\s/g, "");
  return (
    <Link to={`/page2/${path}`}>
      <div
        className={styles.app}
        onClick={() => {
          dispatch(HandleAppName(appname)), dispatch(HandleAppIcon(applogo));
        }}
      >
        {/* <div className={styles.icon}>{appicon}</div> */}
        <img className={styles.icon} src={`./${applogo}`} alt="SVG Image"></img>
        <p>{appname}</p>
      </div>
    </Link>
  );
};

export default AppCard;

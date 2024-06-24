import React from "react";
import { Link } from "react-router-dom";
import styles from "./AppItem.module.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../../Store/Features/SidebarPhone";
import { HandleAppName } from "../../Store/Features/AppName";
import { HandleAppIcon } from "../../Store/Features/AppIcon";

const AppItem = ({ app }) => {
  const { app_name, app_logo } = app;
  const dispatch = useDispatch();
  const path = app_name.replace(/\s/g, "");
  let { cardName } = useParams();
  const classActive = path === cardName ? styles.active : styles.sidebar_apps;

  return (
    <div>
      <Link
        className={classActive}
        to={`/page2/${path}`}
        onClick={() => {
          dispatch(ToggleSidebar());
          dispatch(HandleAppName(app_name));
          dispatch(HandleAppIcon(app_logo));
        }}
      >
        <img src={`/${app_logo}`} alt="App Logo" className={styles.app_logo} />
        <p className={styles.app_name}>{app_name}</p>
      </Link>
    </div>
  );
};

export default AppItem;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./AppItem.module.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../../Store/Features/SidebarPhone";
import { HandleAppName } from "../../Store/Features/AppName";

const AppItem = ({ app }) => {
  const dispatch = useDispatch();

  const path = app.app_name.replace(/\s/g, "");
  let { cardName } = useParams();
  const classActive = path === cardName ? styles.active : styles.sidebar_apps;

  return (
    <Link
      className={classActive}
      to={`/page2/${path}`}
      onClick={() => {
        dispatch(ToggleSidebar());
        dispatch(HandleAppName(app));
      }}
    >
      <div className={styles.app_icon}> {app.icon}</div>
      <p className={styles.app_name}> {app.app_name}</p>
    </Link>
  );
};

export default AppItem;

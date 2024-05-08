import { Link } from "react-router-dom";
import styles from "./Path.module.css";
import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { MdOutlineSpaceDashboard } from "react-icons/md";
const PhoneSidebar = lazy(() => import("../Sidebar/PhoneSidebar/PhoneSidebar"));

const Path = () => {
  const app = useSelector((state) => state.AppName.value);
  const appName = app.app_name;

  return (
    <div className={styles.PathContainer}>
      <Suspense fallback={<div>Loading...</div>}>
        <PhoneSidebar />
      </Suspense>
      <div className={styles.path}>
        <Link to="/" className="link">
          <p className={styles.home}>
            <MdOutlineSpaceDashboard className={styles.icon} /> DashBoard
          </p>
        </Link>

        <div className={styles.currentPath}>
          <p> /&nbsp;&nbsp;{appName}</p>
        </div>
      </div>
    </div>
  );
};

export default Path;

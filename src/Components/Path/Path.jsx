import { Link } from "react-router-dom";
import styles from "./Path.module.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import PhoneSidebar from "../Sidebar/PhoneSidebar/PhoneSidebar";

import React from "react";

const Path = ({ cardName }) => {
  return (
    <div className={styles.PathContainer}>
      <PhoneSidebar />
      <div className={styles.path}>
        <Link to="/" className="link">
          <p className={styles.home}>
            <MdOutlineSpaceDashboard className={styles.icon} /> DashBoard
          </p>
        </Link>

        <div className={styles.currentPath}>
          <p> /&nbsp;&nbsp;{cardName}</p>
        </div>
      </div>
    </div>
  );
};

export default Path;

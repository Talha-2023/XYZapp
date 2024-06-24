import React from "react";
import styles from "./DisplayContainer.module.css";
import { IoIosSettings } from "react-icons/io";
import { useSelector } from "react-redux";

const DisplayContainer = ({ children }) => {
  const appName = useSelector((state) => state.AppName.value);
  const appLogo = useSelector((state) => state.AppIcon.value);

  return (
    <div className={styles.container}>
      <img src={`/${appLogo}`} alt="App Logo" className={styles.icon_design} />

      <div className={styles.app_center}>
        <div className={styles.app_container}>
          <div className={styles.icon}>
            <img src={`/${appLogo}`} alt="App Logo" />
          </div>
          <div className={styles.app}>
            <p>{appName}</p>
          </div>
        </div>
      </div>

      {children}

      {children === undefined && (
        <div className={styles.working}>
          <img src="/working.gif" alt="Working GIF" />
          <h2>Developer in Working on it</h2>
          <IoIosSettings className={styles.rotate} />
          <p>
            Thank you for visiting. We're currently in the process of creating
            something awesome here. Please check back soon for updates. In the
            meantime, feel free to explore the rest of our site.
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayContainer;

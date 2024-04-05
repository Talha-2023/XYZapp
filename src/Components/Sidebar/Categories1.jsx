import styles from "./Categories.module.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaCircleChevronDown } from "react-icons/fa6";
import AppList from "./AppList";
import { useState } from "react";

const Categories1 = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_cat} onClick={() => setShow(!show)}>
          <p className={styles.name}>Body and Fitness </p>
          <FaCircleChevronDown className={styles.arrow} />
        </div>

        {show && (
          <div className={styles.sidebar_bg}>
            <AppList></AppList>
            <AppList></AppList>
            <AppList></AppList>
            <AppList></AppList>
            <AppList></AppList>
            <AppList></AppList>
            <AppList></AppList>
            <AppList></AppList>
          </div>
        )}
      </div>
    </>
  );
};

export default Categories1;

import styles from "./HomeLoading.module.css";
import { GrAction } from "react-icons/gr";
import { GrAchievement } from "react-icons/gr";
import { GrActions } from "react-icons/gr";
import { GrAd } from "react-icons/gr";
import { GrBar } from "react-icons/gr";
import { GrCalculator } from "react-icons/gr";
import { GrCatalog } from "react-icons/gr";
const HomeLoading = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.top_container}>
        <div className={`${styles.creator_container} ${styles.loading}`}></div>
        <div className={`${styles.icon_container} ${styles.loading}`}></div>
      </div>

      <div className={styles.bottom_container}>
        <div className={`${styles.app_container} ${styles.loading}`}></div>
        <div className={`${styles.app_discription}`}>
          <div className={`${styles.img_container} ${styles.loading}`}></div>
          <div className={`${styles.lines} ${styles.loading}`}></div>
          <div className={`${styles.lines} ${styles.loading}`}></div>
          <div className={`${styles.lines} ${styles.loading}`}></div>
          <div className={`${styles.lines} ${styles.loading}`}></div>
          <div className={`${styles.lines} ${styles.loading}`}></div>
          <div className={`${styles.lines} ${styles.loading}`}></div>
          <div className={`${styles.lines} ${styles.loading}`}></div>
          <div className={`${styles.lines} ${styles.loading}`}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoading;

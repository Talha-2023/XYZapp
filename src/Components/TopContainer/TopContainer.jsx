import styles from "./TopContainer.module.css";
import { GrAction } from "react-icons/gr";
import { GrAchievement } from "react-icons/gr";
import { GrActions } from "react-icons/gr";
import { GrAd } from "react-icons/gr";
import { GrBar } from "react-icons/gr";
import { GrCalculator } from "react-icons/gr";
import { GrCatalog } from "react-icons/gr";

const TopContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.creator_container}>
        <p>Web Apps By </p> <span className={styles.talha}>&nbsp;Talha </span>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.para_container}>
          <p>Calculate, Convert, Compare..</p>
        </div>
        <div className={styles.icon_container}>
          <div className={styles.icon}>
            <GrAction />
          </div>
          <div className={styles.icon}>
            <GrAchievement />
          </div>
          <div className={styles.icon}>
            <GrActions />
          </div>
          <div className={styles.icon}>
            <GrAd />
          </div>
          <div className={styles.icon}>
            <GrBar />
          </div>
          <div className={styles.icon}>
            <GrCalculator />
          </div>
          <div className={styles.icon}>
            <GrCatalog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;

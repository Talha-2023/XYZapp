import styles from "./TopContainer.module.css";
import { ImAccessibility } from "react-icons/im";
import { ImAddressBook } from "react-icons/im";
import { ImAirplane } from "react-icons/im";
import { ImAlarm } from "react-icons/im";
import { ImBlogger } from "react-icons/im";
import { ImBook } from "react-icons/im";
import { ImBullhorn } from "react-icons/im";

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
            <ImAccessibility />
          </div>
          <div className={styles.icon}>
            <ImAddressBook />
          </div>
          <div className={styles.icon}>
            <ImAirplane />
          </div>
          <div className={styles.icon}>
            <ImAlarm />
          </div>
          <div className={styles.icon}>
            <ImBlogger />
          </div>
          <div className={styles.icon}>
            <ImBook />
          </div>
          <div className={styles.icon}>
            <ImBullhorn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;

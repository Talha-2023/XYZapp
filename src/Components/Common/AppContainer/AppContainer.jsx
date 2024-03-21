import styles from "./AppContainer.module.css";
import { TbClick } from "react-icons/tb";

const AppContainer = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.app_container}>
        <div className={styles.top_section}>
          <div className={styles.heading}>Body and Fitness:</div>
          <div className={styles.logo_design}>
            <div className={styles.orange_dot}></div>
            <div className={styles.purple_dot}></div>
            <div className={styles.aqua_dot}></div>
          </div>
          <div className={styles.know_me}>
            Know Me &nbsp; <TbClick />
          </div>
        </div>
        <div className={styles.app_card}></div>
      </div>
      <div className={styles.app_discription}></div>
    </div>
  );
};

export default AppContainer;

import styles from "./AppDisplaySection1.module.css";
import AppCard from "../AppCard/AppCard";
import AppDisplayPhone from "./AppDisplayPhone/AppDisplayPhone";
import { useDispatch } from "react-redux";

import { HomeHeading } from "../../../Store/Features/SidebarCategories";
const AppDisplaySection1 = ({ heading, discription, apps, audio }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.app_container}
      onClick={() => dispatch(HomeHeading(heading))}
    >
      <div className={styles.top_section}>
        <div className={styles.heading}>{heading} :</div>

        <div className={styles.logo_design}>
          <div className={styles.orange_dot}></div>
          <div className={styles.purple_dot}></div>
          <div className={styles.aqua_dot}></div>
        </div>

        <AppDisplayPhone discription={discription} audio={audio} />
      </div>

      <div className={styles.apps_cards}>
        {apps.map((app, index) => {
          return (
            <AppCard key={index} appicon={app.icon} appname={app.app_name} />
          );
        })}
      </div>
    </div>
  );
};

export default AppDisplaySection1;

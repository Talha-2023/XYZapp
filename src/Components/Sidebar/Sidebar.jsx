import DeviderLine from "../DeviderLine/DeviderLine";
import styles from "./Sidebar.module.css";
import { TbApps } from "react-icons/tb";
import Categories1 from "./Categories1";

const Sidebar = ({ Data }) => {
  return (
    <div className={styles.Sidebar_Container}>
      <div className={styles.my_apps}>
        <TbApps className={styles.icon} />
        My Apps
      </div>

      <DeviderLine />

      <Categories1 Data={Data} />
    </div>
  );
};

export default Sidebar;

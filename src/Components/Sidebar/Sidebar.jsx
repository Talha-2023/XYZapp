import DeviderLine from "../DeviderLine/DeviderLine";
import styles from "./Sidebar.module.css";
import { TbApps } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Categories1 from "./Categories1";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar_Container}>
      <div className={styles.my_apps}>
        <TbApps className={styles.icon} />
        My Apps
      </div>

      <DeviderLine />

      <Categories1 />
      <Categories1 />
      <Categories1 />
      <Categories1 />
      <Categories1 />
    </div>
  );
};

export default Sidebar;

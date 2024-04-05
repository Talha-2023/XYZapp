import DeviderLine from "../DeviderLine/DeviderLine";
import styles from "./Sidebar.module.css";
import { RiApps2Fill } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Categories1 from "./Categories1";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar_Container}>
      <div className={styles.my_apps}>
        <RiApps2Fill className={styles.icon} />
        My Apps
      </div>

      <DeviderLine />

      <Categories1 />
    </div>
  );
};

export default Sidebar;

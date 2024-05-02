import DeviderLine from "../DeviderLine/DeviderLine";
import styles from "./Sidebar.module.css";
import { TbApps } from "react-icons/tb";
import Categories1 from "./Categories1";
import { Link } from "react-router-dom";

const Sidebar = ({ Data }) => {
  return (
    <div className={styles.Sidebar_Container}>
      <Link to="/">
        <div className={styles.my_apps}>
          <TbApps className={styles.icon} />
          My Apps
        </div>
      </Link>
      <DeviderLine />
      <Categories1 Data={Data} />
    </div>
  );
};

export default Sidebar;

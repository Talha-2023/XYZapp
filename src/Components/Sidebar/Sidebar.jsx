import DeviderLine from "../DeviderLine/DeviderLine";
import styles from "./Sidebar.module.css";
import { TbApps } from "react-icons/tb";
import Categories1 from "./Categories1";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = ({ Data }) => {
  console.log("hi");
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 20 }}
      exit={{ opacity: 0 }}
      className={styles.Sidebar_Container}
    >
      <Link to="/">
        <div className={styles.my_apps}>
          <TbApps className={styles.icon} />
          My Apps
        </div>
      </Link>
      <DeviderLine />
      <Categories1 Data={Data} />
    </motion.div>
  );
};

export default Sidebar;

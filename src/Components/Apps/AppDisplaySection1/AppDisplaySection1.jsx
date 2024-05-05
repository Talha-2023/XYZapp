import styles from "./AppDisplaySection1.module.css";
import AppCard from "../AppCard/AppCard";

import AppDisplayPhone from "./AppDisplayPhone/AppDisplayPhone";
import { useDispatch } from "react-redux";
import { HomeHeading } from "../../../Store/Features/SidebarCategories";
import { motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 1, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
  },
};
const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
};
const AppDisplaySection1 = ({ heading, discription, apps, audio }) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
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

      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
        className={styles.apps_cards}
      >
        {apps.map((app, index) => {
          return (
            <AppCard key={index} appicon={app.icon} appname={app.app_name} />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default AppDisplaySection1;

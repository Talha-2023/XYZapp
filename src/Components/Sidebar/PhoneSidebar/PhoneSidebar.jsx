import { useState } from "react";
import Data from "../../../Data/Data";
import Sidebar from "../../Sidebar/Sidebar";
import styles from "./PhoneSidebar.module.css";
import { FiAlignLeft } from "react-icons/fi";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { ToggleSidebar } from "../../../Store/Features/SidebarPhone";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
const containerVariants = {
  exit: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};
const PhoneSidebar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.SidebarPhone.value);
  return (
    <>
      <div
        className={styles.PhoneSide}
        onClick={() => dispatch(ToggleSidebar())}
      >
        <FiAlignLeft className={styles.iconSide} />
      </div>
      <AnimatePresence>
        {sidebar && (
          <motion.div
            className={styles.sidebarContainer}
            variants={containerVariants}
            initial="initial"
            exit="exit"
          >
            <div className={styles.sidebar}>
              <Sidebar Data={Data} />
              <TbLayoutSidebarRightExpandFilled
                className={styles.iconClose}
                onClick={() => dispatch(ToggleSidebar())}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhoneSidebar;

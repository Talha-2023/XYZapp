import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";
const customVariant = {
  initial: { rotateY: 0 },
  animate: {
    rotateY: 180,
  },
};
const Logo = () => {
  return (
    <div className={styles.logo_cont}>
      <div className={styles.logo_word}>XYZ Apps</div>
      <motion.div className={styles.logo_design}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={customVariant}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className={styles.orange_dot}
        ></motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={customVariant}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 3,
            delay: 0.2,
          }}
          className={styles.purple_dot}
        ></motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={customVariant}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 3,
            delay: 0.3,
          }}
          className={styles.aqua_dot}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Logo;

import styles from "./TopContainer.module.css";
import { motion } from "framer-motion";
import {
  GrAction,
  GrAchievement,
  GrActions,
  GrAd,
  GrBar,
  GrCalculator,
  GrCatalog,
  GrArticle,
  GrBasket,
  GrBusinessService,
  GrCli,
  GrClipboard,
  GrCodeSandbox,
  GrDatabase,
} from "react-icons/gr";
import TopText from "./TopText";
const animationVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2, delay: 1 } }, // Adding delay to the animate property
};
const TopContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.creator_container}>
        <TopText
          text="Web Apps By Talha"
          text2=" Talha"
          characters="0805805805805805"
          speed={100}
          revealDuration={2000}
        />
      </div>
      <motion.div
        variants={animationVariant}
        initial="initial"
        animate="animate"
        className={styles.bottom_container}
      >
        <div className={styles.para_container}>
          <p>Calculate, Convert, Compare..</p>
        </div>
        <div className={styles.icon_container}>
          <div className={styles.icon_scroll_Box1}>
            <GrAction className={styles.icon} />
            <GrAchievement className={styles.icon} />
            <GrActions className={styles.icon} />
            <GrAd className={styles.icon} />
            <GrBar className={styles.icon} />
            <GrCalculator className={styles.icon} />
            <GrCatalog className={styles.icon} />
          </div>
          <div className={styles.icon_scroll_Box1}>
            <GrArticle className={styles.icon} />
            <GrBasket className={styles.icon} />
            <GrBusinessService className={styles.icon} />
            <GrCli className={styles.icon} />
            <GrClipboard className={styles.icon} />
            <GrCodeSandbox className={styles.icon} />
            <GrDatabase className={styles.icon} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TopContainer;

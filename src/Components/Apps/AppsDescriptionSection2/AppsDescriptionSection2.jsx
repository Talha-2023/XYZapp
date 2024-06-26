import React from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import styles from "./AppsDescriptionSection2.module.css";
import { IoIosSettings } from "react-icons/io";

import { HandleTogglePlay } from "../../../Store/Features/TogglePlay";
import { useDispatch, useSelector } from "react-redux";
import { delay, motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 0, x: "-100px" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  },
};

const AppsDescriptionSection2 = ({ discription, audio }) => {
  const dispatch = useDispatch();
  const Audio = useSelector((state) => state.TogglePlay.value);
  const audioRef = React.createRef();
  const iconClass = Audio ? styles.icon_active : styles.icon_inactive;

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={styles.app_discription}
    >
      <div className={styles.img_container}>
        <img src={`/${audio}.png`} alt="image" />
        <div className={styles.gif_shadow}></div>
      </div>

      <div className={styles.discription}>
        <audio ref={audioRef} src={`/${audio}.mp3`}></audio>
        <p className={styles.dis}>
          <FaVolumeHigh
            className={iconClass}
            onClick={() => dispatch(HandleTogglePlay(audioRef))}
          />
          &nbsp; {discription}
        </p>
      </div>

      <p className={styles.colen}>"</p>
      <p className={styles.pattern}>
        . <IoIosSettings className={styles.rotate} />
        .....
        <IoIosSettings className={styles.rotate} />
        .....
        <br />
        <IoIosSettings className={styles.rotate} />
        ....... <IoIosSettings className={styles.rotate} />
        ....
        <br />
        .....
        <IoIosSettings className={styles.rotate} />
        ......
        <br />
        .........
        <IoIosSettings className={styles.rotate} />
        .
        <br />
        .....
        <IoIosSettings className={styles.rotate} />
        .... <IoIosSettings className={styles.rotate} />.
      </p>
    </motion.div>
  );
};

export default AppsDescriptionSection2;

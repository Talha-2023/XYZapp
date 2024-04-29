import React, { useState } from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import styles from "./AppsDescriptionSection2.module.css";
import { IoIosSettings } from "react-icons/io";

const AppsDescriptionSection2 = ({ discription, audio }) => {
  // const play = () => {
  //   new Audio(`/${audio}.mp3`).play();
  // };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const iconClass = isPlaying ? styles.icon_active : styles.icon_inactive;

  return (
    <div className={styles.app_discription}>
      <div className={styles.img_container}>
        <img src={`/${audio}.png`} alt="image" />
        <div className={styles.gif_shadow}></div>
      </div>

      <div className={styles.discription}>
        <audio ref={audioRef} src={`/${audio}.mp3`}></audio>
        <p className={styles.dis}>
          <FaVolumeHigh className={iconClass} onClick={togglePlay} />
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
    </div>
  );
};

export default AppsDescriptionSection2;

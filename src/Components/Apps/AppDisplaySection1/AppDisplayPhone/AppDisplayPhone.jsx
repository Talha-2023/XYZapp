import React, { useState } from "react";
import styles from "./AppDisplayPhone.module.css";
import { TbClick } from "react-icons/tb";
import { FaVolumeHigh } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

const AppDisplayPhone = ({ discription, audio }) => {
  const [display, setDisplay] = useState(false);

  const HandleDisplay = () => {
    setDisplay(!display);
  };

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
    <>
      <div className={styles.know_me} onClick={HandleDisplay}>
        Know Me &nbsp; <TbClick />
      </div>

      {display && (
        <>
          <div className={styles.know_me_description}>
            <audio ref={audioRef} src={`/${audio}.mp3`}></audio>
            <p>
              <FaVolumeHigh className={iconClass} onClick={togglePlay} /> &nbsp;
              {discription}
            </p>
            <div className={styles.arrow}></div>
            <div className={styles.closeButton} onClick={HandleDisplay}>
              <IoCloseCircle />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppDisplayPhone;

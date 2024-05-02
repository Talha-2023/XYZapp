import React from "react";
import styles from "./AppDisplayPhone.module.css";
import { TbClick } from "react-icons/tb";
import { FaVolumeHigh } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

import { HandleDisplay } from "../../../../Store/Features/DisToggle";
import { HandleTogglePlay } from "../../../../Store/Features/TogglePlay";
import { useDispatch, useSelector } from "react-redux";

const AppDisplayPhone = ({ discription, audio }) => {
  const display = useSelector((state) => state.DisToggle.value);
  const dispatch = useDispatch();

  const Audio = useSelector((state) => state.TogglePlay.value);

  const audioRef = React.createRef();

  const iconClass = Audio ? styles.icon_active : styles.icon_inactive;

  return (
    <>
      <div className={styles.know_me} onClick={() => dispatch(HandleDisplay())}>
        Know Me &nbsp; <TbClick />
      </div>

      {display && (
        <>
          <div className={styles.know_me_description}>
            <audio ref={audioRef} src={`/${audio}.mp3`}></audio>
            <p>
              <FaVolumeHigh
                className={iconClass}
                onClick={() => dispatch(HandleTogglePlay(audioRef))}
              />{" "}
              &nbsp;
              {discription}
            </p>
            <div className={styles.arrow}></div>
            <div
              className={styles.closeButton}
              onClick={() => {
                dispatch(HandleDisplay());
              }}
            >
              <IoCloseCircle />
            </div>
          </div>
          {console.log(audioRef)}
        </>
      )}
    </>
  );
};

export default AppDisplayPhone;

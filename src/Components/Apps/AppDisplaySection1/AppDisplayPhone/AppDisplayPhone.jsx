import styles from "./AppDisplayPhone.module.css";
import { TbClick } from "react-icons/tb";
import { FaVolumeHigh } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

import { useState } from "react";
const AppDisplayPhone = ({ discription }) => {
  const [display, setDisplay] = useState(false);

  const HandleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className={styles.know_me} onClick={HandleDisplay}>
        Know Me &nbsp; <TbClick />
      </div>

      {display && (
        <>
          <div className={styles.know_me_description}>
            <p>
              <FaVolumeHigh style={{ color: "orange", fontSize: "20px" }} />
              {discription}
              {console.log(discription)}
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

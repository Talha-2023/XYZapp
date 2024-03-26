import styles from "./AppDisplayPhone.module.css";
import { TbClick } from "react-icons/tb";
import { FaVolumeHigh } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";

import { useState } from "react";
const AppDisplayPhone = () => {
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
              &nbsp;Easily monitor your health with our web apps! Use the BMI
              Calculator to check your weight status, estimate calorie burn with
              the Caloric Burn Calculator, find nutritional content with the
              Nutritional Value Calculator, assess body fat percentage with the
              Body Fat Percentage Calculator, and track water intake with the
              Water Intake Checker. Stay informed and make healthier choices
              effortlessly!
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

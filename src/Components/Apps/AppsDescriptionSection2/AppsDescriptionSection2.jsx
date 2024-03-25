import React from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import styles from "./AppsDescriptionSection2.module.css";
const AppsDescriptionSection2 = () => {
  return (
    <div className={styles.app_discription}>
      <div className={styles.img_container}>
        <img src="BodyAndFitness2.png" alt="" />
        <div className={styles.gif_shadow}></div>
      </div>
      <div className={styles.discription}>
        <p className={styles.dis}>
          <FaVolumeHigh style={{ color: "aqua", fontSize: "20px" }} />
          &nbsp;Easily monitor your health with our web apps! Use the BMI
          Calculator to check your weight status, estimate calorie burn with the
          Caloric Burn Calculator, find nutritional content with the Nutritional
          Value Calculator, assess body fat percentage with the Body Fat
          Percentage Calculator, and track water intake with the Water Intake
          Checker. Stay informed and make healthier choices effortlessly!
        </p>
      </div>
      <p className={styles.colen}>"</p>
      <p className={styles.pattern}>
        .....x.....
        <br />
        x..........
        <br />
        ...........
        <br />
        .........x.
        <br />
        .....x.....
      </p>
    </div>
  );
};

export default AppsDescriptionSection2;

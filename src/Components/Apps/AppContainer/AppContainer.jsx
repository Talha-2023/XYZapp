import styles from "./AppContainer.module.css";
import AppDisplaySection1 from "../AppDisplaySection1/AppDisplaySection1";
import AppsDescriptionSection2 from "../AppsDescriptionSection2/AppsDescriptionSection2";
// import Data from "../../../Data/Data";

// import { BsUsbMini } from "react-icons/bs";
// import { AiOutlineFire } from "react-icons/ai";
// import { CiGlass } from "react-icons/ci";
// import { FaPerson } from "react-icons/fa6";
// import { SlSpeedometer } from "react-icons/sl";
// import { IoFastFoodOutline } from "react-icons/io5";
import DeviderLine from "../../DeviderLine/DeviderLine";
import Talha from "./Talha";
// import { useState } from "react";
// import Talha from "./Talha.jsx";
// import Data from "./Data.js";

const AppContainer = ({ id, heading, discription, apps, audio }) => {
  // const Data = [
  //   {
  //     heading: "Body and Fitness:",
  //     discription:
  //       " Easily monitor your health with our web apps! Use the BMI Calculator to check your weight status, estimate calorie burn with the Caloric Burn Calculator, find nutritional content with the Nutritional Value Calculator, assess body fat percentage with the Body Fat Percentage Calculator, and track water intake with the Water Intake Checker. Stay informed and make healthier choices effortlessly!",
  //     apps: [
  //       {
  //         icon: <SlSpeedometer />,
  //         app_name: "BMI Calculator",
  //       },
  //       {
  //         icon: <AiOutlineFire />,
  //         app_name: "Caloric Burn Calculator ",
  //       },
  //       {
  //         icon: <IoFastFoodOutline />,
  //         app_name: "Nutritional Value Calculator  ",
  //       },
  //       {
  //         icon: <FaPerson />,
  //         app_name: "Body Fat Percentage   ",
  //       },
  //       {
  //         icon: <CiGlass />,
  //         app_name: "Check your water intake",
  //       },
  //       {
  //         icon: <BsUsbMini />,
  //         app_name: "BMI Calculator",
  //       },
  //       {
  //         icon: <BsUsbMini />,
  //         app_name: "BMI Calculator",
  //       },
  //       {
  //         icon: <BsUsbMini />,
  //         app_name: "BMI Calculator",
  //       },
  //     ],
  //   },
  // ];

  return (
    <>
      <div className={styles.main_container}>
        <AppDisplaySection1
          key={id}
          heading={heading}
          discription={discription}
          apps={apps}
          audio={audio}
        />

        <AppsDescriptionSection2
          key={heading}
          discription={discription}
          audio={audio}
        />
      </div>

      <DeviderLine />
    </>
  );
};

export default AppContainer;

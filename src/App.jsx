import "./App.css";
import BackGround from "./Components/BackGround/BackGround";
import AppContainer from "./Components/Apps/AppContainer/AppContainer";
import DeviderLine from "./Components/DeviderLine/DeviderLine";
import Navbar from "./Components/Navbar/Navbar";
import TopContainer from "./Components/TopContainer/TopContainer";

import Sidebar from "./Components/Sidebar/Sidebar";
import Text from "./Components/Text";

import { BsUsbMini } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { CiGlass } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import { SlSpeedometer } from "react-icons/sl";
import { IoFastFoodOutline } from "react-icons/io5";

function App() {
  const Data = [
    {
      heading: "Body and Fitness:",
      discription:
        " Easily monitor your health with our web apps! Use the BMI Calculator to check your weight status, estimate calorie burn with the Caloric Burn Calculator, find nutritional content with the Nutritional Value Calculator, assess body fat percentage with the Body Fat Percentage Calculator, and track water intake with the Water Intake Checker. Stay informed and make healthier choices effortlessly!",
      apps: [
        {
          icon: <SlSpeedometer />,
          app_name: "BMI Calculator",
        },
        {
          icon: <AiOutlineFire />,
          app_name: "Caloric Burn Calculator ",
        },
        {
          icon: <IoFastFoodOutline />,
          app_name: "Nutritional Value Calculator  ",
        },
        {
          icon: <FaPerson />,
          app_name: "Body Fat Percentage   ",
        },
        {
          icon: <CiGlass />,
          app_name: "Check your water intake",
        },
        {
          icon: <BsUsbMini />,
          app_name: "BMI Calculator",
        },
        {
          icon: <BsUsbMini />,
          app_name: "BMI Calculator",
        },
        {
          icon: <BsUsbMini />,
          app_name: "BMI Calculator",
        },
      ],
    },
  ];

  return (
    <>
      <BackGround></BackGround>

      <Navbar />

      <div className="MAIN">
        <TopContainer />
        <DeviderLine />
        {Data.map((Data, index) => {
          return (
            <AppContainer
              id={index}
              key={index}
              heading={Data.heading}
              discription={Data.discription}
              apps={Data.apps}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

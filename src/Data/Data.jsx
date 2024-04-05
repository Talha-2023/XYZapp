import { BsUsbMini } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { CiGlass } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import { SlSpeedometer } from "react-icons/sl";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiPersonSimpleRunFill } from "react-icons/pi";
import { MdOutlineKingBed } from "react-icons/md";
import { LiaWeightSolid } from "react-icons/lia";

const Data = [
  {
    heading: "Body and Fitness:",
    discription:
      "These apps help you stay healthy and fit. The BMI Calculator checks your weight, the Caloric Burn Calculator estimates calories burned during exercise, and the Nutritional Value Calculator tracks food nutrients. The Body Fat Percentage Tracker monitors body composition, the Water Intake Checker ensures hydration, and the Running Route Planner suggests jogging paths. The Sleep Tracker monitors sleep patterns, and the Ideal Weight Calculator sets healthy weight goals. They're all about making it easier to stay on top of your health.",
    audio: "BodyAndFitness",
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
        icon: <PiPersonSimpleRunFill />,
        app_name: "Running Route Planner",
      },
      {
        icon: <MdOutlineKingBed />,
        app_name: "Sleep Tracker",
      },
      {
        icon: <LiaWeightSolid />,
        app_name: "Ideal Weight Calculator",
      },
    ],
  },
];
export default Data;

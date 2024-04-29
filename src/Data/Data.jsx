import { BsUsbMini } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { CiGlass } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import { SlSpeedometer } from "react-icons/sl";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiPersonSimpleRunFill } from "react-icons/pi";
import { MdOutlineKingBed } from "react-icons/md";
import { LiaWeightSolid } from "react-icons/lia";
import { FaCashRegister } from "react-icons/fa6";
import { BsCalculator } from "react-icons/bs";
import { PiHandCoinsBold } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";
import { LiaWalletSolid } from "react-icons/lia";
import { RiListCheck3 } from "react-icons/ri";
import { PiCoinVerticalDuotone } from "react-icons/pi";
import { TiArrowRepeat } from "react-icons/ti";
import { FaGraduationCap } from "react-icons/fa";
import { TbAlphabetGreek } from "react-icons/tb";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbChartAreaLine } from "react-icons/tb";
import { TbVectorTriangle } from "react-icons/tb";
import { RiRectangleLine } from "react-icons/ri";
import { LuSheet } from "react-icons/lu";
import { RiCalendarTodoLine } from "react-icons/ri";

const Data = [
  {
    heading: "Body and Fitness",
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
        app_name: "Check Your Water Intake",
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
  {
    heading: "Financial",
    discription:
      "These apps cover a range of financial needs. The Mortgage, Interest, and Loan Calculators aid in planning loans and mortgages. ExpensesTracker helps manage budgets, while the Investment Portfolio Manager tracks investments. The EMI Calculator computes monthly installments, the Tip Calculator simplifies tipping, and the Currency Converter handles currency conversions. Together, they provide essential tools for financial management.",
    audio: "Financial",
    apps: [
      {
        icon: <FaCashRegister />,
        app_name: "Mortgage Calculator",
      },
      {
        icon: <BsCalculator />,
        app_name: "Interest Calculator",
      },
      {
        icon: <PiHandCoinsBold />,
        app_name: "Loan Repayment Calculator",
      },
      {
        icon: <BsCashCoin />,
        app_name: "Expense Tracker",
      },
      {
        icon: <LiaWalletSolid />,
        app_name: "Savings Goal Tracker",
      },
      {
        icon: <RiListCheck3 />,
        app_name: "EMI Calculator",
      },
      {
        icon: <PiCoinVerticalDuotone />,
        app_name: "Tip Calculator",
      },
      {
        icon: <TiArrowRepeat />,
        app_name: "Currency Converter",
      },
    ],
  },
  {
    heading: "Education",
    discription:
      "These apps cover a wide range of needs. For students, there's the GPA Calculator and Grade Converter for academic tracking. The Kawaii Habit Tracker helps develop positive habits, while the Area and Perimeter Calculator and Triangle Solver assist with math. The Rectangle Area Calculator simplifies geometric calculations, and the Attendance Calculator monitors attendance. Lastly, the Todo app keeps tasks organized for enhanced productivity.",
    audio: "Education",
    apps: [
      {
        icon: <FaGraduationCap />,
        app_name: "GPA Calculator ",
      },
      {
        icon: <TbAlphabetGreek />,
        app_name: "Grade Converter   ",
      },
      {
        icon: <AiOutlineSchedule />,
        app_name: "Kawaii Habit Tracker ",
      },
      {
        icon: <TbChartAreaLine />,
        app_name: "Area and Perimeter Calculator  ",
      },
      {
        icon: <TbVectorTriangle />,
        app_name: "Triangle Solver    ",
      },
      {
        icon: <RiRectangleLine />,
        app_name: "Rectangle Area Calculator ",
      },
      {
        icon: <LuSheet />,
        app_name: "Attendance Calculator ",
      },
      {
        icon: <RiCalendarTodoLine />,
        app_name: "Todo ",
      },
    ],
  },
];
export default Data;

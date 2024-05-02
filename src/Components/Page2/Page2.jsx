import styles from "./Page2.module.css";
import { useParams } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

import BMICalculator from "../AppsDisplay/BodyAndFitness/BMICalculator/BMICalculator";
import BodyFatPercentage from "../AppsDisplay/BodyAndFitness/BodyFatPercentage/BodyFatPercentage";
import CaloricBurnCalculator from "../AppsDisplay/BodyAndFitness/CaloricBurnCalculator/CaloricBurnCalculator";
import CheckYourWaterIntake from "../AppsDisplay/BodyAndFitness/CheckYourWaterIntake/CheckYourWaterIntake";
import IdealWeightCalculator from "../AppsDisplay/BodyAndFitness/IdealWeightCalculator/IdealWeightCalculator";
import NutritionalValueCalculator from "../AppsDisplay/BodyAndFitness/NutritionalValueCalculator/NutritionalValueCalculator";
import RunningRoutePlanner from "../AppsDisplay/BodyAndFitness/RunningRoutePlanner/RunningRoutePlanner";
import SleepTracker from "../AppsDisplay/BodyAndFitness/SleepTracker/SleepTracker";
import AreaAndPerimeterCalculator from "../AppsDisplay/Education/AreaAndPerimeterCalculator/AreaAndPerimeterCalculator";
import AttendanceCalculator from "../AppsDisplay/Education/AttendanceCalculator/AttendanceCalculator";
import GPACalculator from "../AppsDisplay/Education/GPACalculator/GPACalculator";
import GradeConverter from "../AppsDisplay/Education/GradeConverter/GradeConverter";
import KawaiiHabitTracker from "../AppsDisplay/Education/KawaiiHabitTracker/KawaiiHabitTracker";
import RectangleAreaCalculator from "../AppsDisplay/Education/RectangleAreaCalculator/RectangleAreaCalculator";
import Todo from "../AppsDisplay/Education/Todo/Todo";
import TriangleSolver from "../AppsDisplay/Education/TriangleSolver/TriangleSolver";
import CurrencyConverter from "../AppsDisplay/Financial/CurrencyConverter/CurrencyConverter";
import EMICalculator from "../AppsDisplay/Financial/EMICalculator/EMICalculator";
import ExpenseTracker from "../AppsDisplay/Financial/ExpenseTracker/ExpenseTracker";
import InterestCalculator from "../AppsDisplay/Financial/InterestCalculator/InterestCalculator";
import LoanRepaymentCalculator from "../AppsDisplay/Financial/LoanRepaymentCalculator/LoanRepaymentCalculator";
import MortgageCalculator from "../AppsDisplay/Financial/MortgageCalculator/MortgageCalculator";
import SavingsGoalTracker from "../AppsDisplay/Financial/SavingsGoalTracker/SavingsGoalTracker";
import TipCalculator from "../AppsDisplay/Financial/TipCalculator/TipCalculator";

import Path from "../Path/Path";

const components = {
  BMICalculator,
  BodyFatPercentage,
  CaloricBurnCalculator,
  CheckYourWaterIntake,
  IdealWeightCalculator,
  NutritionalValueCalculator,
  RunningRoutePlanner,
  SleepTracker,
  AreaAndPerimeterCalculator,
  AttendanceCalculator,
  GPACalculator,
  GradeConverter,
  KawaiiHabitTracker,
  RectangleAreaCalculator,
  Todo,
  TriangleSolver,
  CurrencyConverter,
  EMICalculator,
  ExpenseTracker,
  InterestCalculator,
  LoanRepaymentCalculator,
  MortgageCalculator,
  SavingsGoalTracker,
  TipCalculator,
};

const Page2 = ({ Data }) => {
  let { cardName } = useParams();

  const Component = components[cardName];

  return (
    <div className={styles.page2}>
      {window.scrollTo(0, 0)}
      <Sidebar Data={Data} />

      <div className={styles.display_container}>
        <Path cardName={cardName}></Path>
        {Component ? <Component /> : <div>Component not found</div>}
      </div>
    </div>
  );
};

export default Page2;

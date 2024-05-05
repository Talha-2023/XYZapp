import styles from "./Page2.module.css";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Suspense, lazy } from "react";
import AppDisplayLoading from "../Loading/AppDisplayLoading";
import { motion, AnimatePresence } from "framer-motion";

const BMICalculator = lazy(() =>
  import("../AppsDisplay/BodyAndFitness/BMICalculator/BMICalculator")
);
const BodyFatPercentage = lazy(() =>
  import("../AppsDisplay/BodyAndFitness/BodyFatPercentage/BodyFatPercentage")
);
const CaloricBurnCalculator = lazy(() =>
  import(
    "../AppsDisplay/BodyAndFitness/CaloricBurnCalculator/CaloricBurnCalculator"
  )
);
const CheckYourWaterIntake = lazy(() =>
  import(
    "../AppsDisplay/BodyAndFitness/CheckYourWaterIntake/CheckYourWaterIntake"
  )
);
const IdealWeightCalculator = lazy(() =>
  import(
    "../AppsDisplay/BodyAndFitness/IdealWeightCalculator/IdealWeightCalculator"
  )
);
const NutritionalValueCalculator = lazy(() =>
  import(
    "../AppsDisplay/BodyAndFitness/NutritionalValueCalculator/NutritionalValueCalculator"
  )
);
const RunningRoutePlanner = lazy(() =>
  import(
    "../AppsDisplay/BodyAndFitness/RunningRoutePlanner/RunningRoutePlanner"
  )
);
const SleepTracker = lazy(() =>
  import("../AppsDisplay/BodyAndFitness/SleepTracker/SleepTracker")
);
const AreaAndPerimeterCalculator = lazy(() =>
  import(
    "../AppsDisplay/Education/AreaAndPerimeterCalculator/AreaAndPerimeterCalculator"
  )
);
const AttendanceCalculator = lazy(() =>
  import("../AppsDisplay/Education/AttendanceCalculator/AttendanceCalculator")
);
const GPACalculator = lazy(() =>
  import("../AppsDisplay/Education/GPACalculator/GPACalculator")
);
const GradeConverter = lazy(() =>
  import("../AppsDisplay/Education/GradeConverter/GradeConverter")
);
const KawaiiHabitTracker = lazy(() =>
  import("../AppsDisplay/Education/KawaiiHabitTracker/KawaiiHabitTracker")
);
const RectangleAreaCalculator = lazy(() =>
  import(
    "../AppsDisplay/Education/RectangleAreaCalculator/RectangleAreaCalculator"
  )
);
const Todo = lazy(() => import("../AppsDisplay/Education/Todo/Todo"));
const TriangleSolver = lazy(() =>
  import("../AppsDisplay/Education/TriangleSolver/TriangleSolver")
);
const CurrencyConverter = lazy(() =>
  import("../AppsDisplay/Financial/CurrencyConverter/CurrencyConverter")
);
const EMICalculator = lazy(() =>
  import("../AppsDisplay/Financial/EMICalculator/EMICalculator")
);
const ExpenseTracker = lazy(() =>
  import("../AppsDisplay/Financial/ExpenseTracker/ExpenseTracker")
);
const InterestCalculator = lazy(() =>
  import("../AppsDisplay/Financial/InterestCalculator/InterestCalculator")
);
const LoanRepaymentCalculator = lazy(() =>
  import(
    "../AppsDisplay/Financial/LoanRepaymentCalculator/LoanRepaymentCalculator"
  )
);
const MortgageCalculator = lazy(() =>
  import("../AppsDisplay/Financial/MortgageCalculator/MortgageCalculator")
);
const SavingsGoalTracker = lazy(() =>
  import("../AppsDisplay/Financial/SavingsGoalTracker/SavingsGoalTracker")
);
const TipCalculator = lazy(() =>
  import("../AppsDisplay/Financial/TipCalculator/TipCalculator")
);
const Path = lazy(() => import("../Path/Path"));

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

const containerVariants = {
  initial: { opacity: 1, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const Page2 = ({ Data }) => {
  let { cardName } = useParams();

  const Component = components[cardName];
  return (
    <div className={styles.page2}>
      {window.scrollTo(0, 0)}
      <div className={styles.Sidebar_Hide}>
        <Sidebar Data={Data} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className={styles.display_container}
      >
        <Path cardName={cardName}></Path>

        <Suspense fallback={<AppDisplayLoading />}>
          <div>
            {Component ? <Component /> : <div>Component not found</div>}
          </div>
        </Suspense>
        {/* <AppDisplayLoading/> */}
      </motion.div>
    </div>
  );
};

export default Page2;

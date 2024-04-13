import styles from "./Page2.module.css";
import Sidebar from "../Sidebar/Sidebar";
import BMICalculator from "../AppsDisplay/BodyAndFitness/BMICalculator";
import DisplayContainerDesign from "./DisplayContainerDesign";

export const Page2 = ({ Data }) => {
  return (
    <div className={styles.page2}>
      <Sidebar Data={Data} />

      <DisplayContainerDesign>
        <BMICalculator />
      </DisplayContainerDesign>
    </div>
  );
};

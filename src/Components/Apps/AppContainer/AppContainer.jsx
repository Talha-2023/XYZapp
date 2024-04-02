import styles from "./AppContainer.module.css";
import AppDisplaySection1 from "../AppDisplaySection1/AppDisplaySection1";
import AppsDescriptionSection2 from "../AppsDescriptionSection2/AppsDescriptionSection2";
// import DATA from "../../../Data/Data";

const AppContainer = () => {
  return (
    <div className={styles.main_container}>
      <AppDisplaySection1 />
      <AppsDescriptionSection2 />
    </div>
  );
};

export default AppContainer;

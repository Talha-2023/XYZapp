import styles from "./AppContainer.module.css";
import { FaVolumeHigh } from "react-icons/fa6";

import AppDisplaySection1 from "../AppDisplaySection1/AppDisplaySection1";
import AppsDescriptionSection2 from "../AppsDescriptionSection2/AppsDescriptionSection2";

const AppContainer = () => {
  return (
    <div className={styles.main_container}>
      <AppDisplaySection1 />

      <AppsDescriptionSection2 />
    </div>
  );
};

export default AppContainer;

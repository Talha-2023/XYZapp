import styles from "./AppContainer.module.css";
import AppDisplaySection1 from "../AppDisplaySection1/AppDisplaySection1";
import AppsDescriptionSection2 from "../AppsDescriptionSection2/AppsDescriptionSection2";

import DeviderLine from "../../DeviderLine/DeviderLine";

const AppContainer = ({ id, heading, discription, apps, audio }) => {
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

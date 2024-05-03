import styles from "./AppContainer.module.css";
import { Suspense, React, lazy } from "react";

// import AppDisplaySection1 from "../AppDisplaySection1/AppDisplaySection1";
// import AppsDescriptionSection2 from "../AppsDescriptionSection2/AppsDescriptionSection2";
const AppsDescriptionSection2 = lazy(() =>
  import("../AppsDescriptionSection2/AppsDescriptionSection2")
);
const AppDisplaySection1 = lazy(() =>
  import("../AppDisplaySection1/AppDisplaySection1")
);

import DeviderLine from "../../DeviderLine/DeviderLine";
import AppLoading from "../../Loading/AppLoading";
import DisLoading from "../../Loading/DisLoading";

const AppContainer = ({ id, heading, discription, apps, audio }) => {
  return (
    <>
      <DeviderLine />
      <div className={styles.main_container}>
        <Suspense fallback={<AppLoading />}>
          <AppDisplaySection1
            key={id}
            heading={heading}
            discription={discription}
            apps={apps}
            audio={audio}
          />
        </Suspense>
        <Suspense fallback={<DisLoading />}>
          <AppsDescriptionSection2
            key={heading}
            discription={discription}
            audio={audio}
          />
        </Suspense>
      </div>
    </>
  );
};

export default AppContainer;

import styles from "./DisplayContainer.module.css";
import { IoIosSettings } from "react-icons/io";

import { useSelector } from "react-redux";

const DisplayContainer = ({ children }) => {
  const app = useSelector((state) => state.AppName.value);
  const appName = app.app_name;
  const appIcon = app.icon;

  // let { cardName } = useParams();
  // const appName = cardName.replace(/([A-Z])/g, " $1");
  console.log(appName);
  console.log({ children });
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.icon_design}>{appIcon}</h1>

        <div className={styles.app_center}>
          <div className={styles.app_container}>
            <div className={styles.icon}>
              <p> {appIcon}</p>
            </div>
            <div className={styles.app}>
              <p>{appName}</p>
            </div>
          </div>
        </div>
        {children}
        {children === undefined && (
          <div className={styles.working}>
            <img src="/working.gif" />
            <h2>Developer in Working onit</h2>
            <IoIosSettings className={styles.rotate} />
            <p>
              Thank you for visiting. We're currently in the process of creating
              something awesome here. Please check back soon for updates. In the
              meantime, feel free to explore the rest of our site.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayContainer;

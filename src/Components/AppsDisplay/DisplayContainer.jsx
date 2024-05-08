import styles from "./DisplayContainer.module.css";
import { useSelector } from "react-redux";

const DisplayContainer = ({ children }) => {
  const app = useSelector((state) => state.AppName.value);
  const appName = app.app_name;
  const appIcon = app.icon;

  // let { cardName } = useParams();
  // const appName = cardName.replace(/([A-Z])/g, " $1");
  console.log(appName);
  return (
    <>
      <div className={styles.container}>
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
      </div>
    </>
  );
};

export default DisplayContainer;

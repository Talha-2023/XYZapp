import styles from "./AppList.module.css";

const AppList = ({ App }) => {
  return App.map((app) => (
    <div className={styles.sidebar_apps} key={app.app_name}>
      <div className={styles.app_icon}> {app.icon}</div>
      <p className={styles.app_name}> {app.app_name}</p>
    </div>
  ));
};

export default AppList;

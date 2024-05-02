import styles from "./AppList.module.css";
import AppItem from "./AppItem";

const AppList = ({ App }) => {
  return App.map((app) => (
    <AppItem name={app.app_name} icon={app.icon} key={app.app_name}></AppItem>
  ));
};

export default AppList;

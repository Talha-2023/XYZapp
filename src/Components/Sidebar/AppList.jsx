import styles from "./AppList.module.css";
import AppItem from "./AppItem";
import { HandleAppName } from "../../Store/Features/AppName";
import { useDispatch } from "react-redux";

const AppList = ({ App }) => {
  const dispatch = useDispatch();

  return App.map((app) => <AppItem app={app} key={app.app_name}></AppItem>);
};

export default AppList;

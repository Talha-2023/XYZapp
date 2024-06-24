import AppItem from "./AppItem";

const AppList = ({ App }) => {
  return App.map((app) => <AppItem app={app} key={app.app_name}></AppItem>);
};

export default AppList;

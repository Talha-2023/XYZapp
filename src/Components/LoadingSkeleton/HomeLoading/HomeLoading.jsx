import AppLoading from "../../Loading/AppLoading";
import DisLoading from "../../Loading/DisLoading";
import styles from "./HomeLoading.module.css";

const HomeLoading = () => {
  return (
    <div className={styles.bottom_container}>
      <AppLoading />
      <DisLoading />
    </div>
  );
};

export default HomeLoading;

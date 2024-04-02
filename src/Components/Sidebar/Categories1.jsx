import styles from "./Categories.module.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const Categories1 = () => {
  return (
    <div className={styles.Sidebar_Cat}>
      <MdOutlineSpaceDashboard
        style={{ fontSize: "30px", marginRight: "10px" }}
      />
      Dashboard
    </div>
  );
};

export default Categories1;

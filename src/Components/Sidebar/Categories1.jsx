import styles from "./Categories.module.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const Categories1 = () => {
  return (
    <div className={styles.Sidebar_Cat}>
      {/* <MdOutlineSpaceDashboard style={{ fontSize: "30px" }} /> */}
      <p className={styles.name}>Body and fitness </p>
      <IoMdArrowDropright className={styles.arrow} />
    </div>
  );
};

export default Categories1;

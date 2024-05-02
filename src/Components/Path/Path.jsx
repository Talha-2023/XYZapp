import { Link } from "react-router-dom";
import styles from "./Path.module.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const Path = ({ cardName }) => {
  return (
    <div className={styles.path}>
      <Link to="/" className="link">
        <p className={styles.home}>
          <MdOutlineSpaceDashboard className={styles.icon} /> DashBoard
        </p>
      </Link>

      <div className={styles.currentPath}>
        <p> /&nbsp;&nbsp;{cardName}</p>
      </div>
    </div>
  );
};

export default Path;

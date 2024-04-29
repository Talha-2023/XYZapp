import { Link } from "react-router-dom";
import styles from "./Path.module.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const Path = ({ cardName }) => {
  return (
    <div className={styles.path}>
      <ul>
        <Link to="/">
          <li className="li">
            <MdOutlineSpaceDashboard style={{ fontSize: "25px" }} /> DashBoard
          </li>
        </Link>

        <li className="li"> &nbsp; / {cardName}</li>
      </ul>
    </div>
  );
};

export default Path;

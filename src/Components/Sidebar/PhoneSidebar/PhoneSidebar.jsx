import { useState } from "react";
import Data from "../../../Data/Data";
import Sidebar from "../../Sidebar/Sidebar";
import styles from "./PhoneSidebar.module.css";
import { FiAlignLeft } from "react-icons/fi";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";

const PhoneSidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={styles.PhoneSide} onClick={toggleSidebar}>
        <FiAlignLeft className={styles.iconSide} />
      </div>
      {sidebar && (
        <div className={styles.sidebarContainer}>
          <div className={styles.sidebar}>
            <Sidebar Data={Data} />
            <TbLayoutSidebarRightExpandFilled
              className={styles.iconClose}
              onClick={toggleSidebar}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneSidebar;

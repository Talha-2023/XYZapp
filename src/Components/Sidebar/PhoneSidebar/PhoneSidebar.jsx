import { useState } from "react";
import Data from "../../../Data/Data";
import Sidebar from "../../Sidebar/Sidebar";
import styles from "./PhoneSidebar.module.css";
import { FiAlignLeft } from "react-icons/fi";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { ToggleSidebar } from "../../../Store/Features/SidebarPhone";
import { useDispatch, useSelector } from "react-redux";
const PhoneSidebar = () => {
  // const [sidebar, setSidebar] = useState(false);
  // const toggleSidebar = () => setSidebar(!sidebar);

  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.SidebarPhone.value);
  return (
    <>
      <div
        className={styles.PhoneSide}
        onClick={() => dispatch(ToggleSidebar())}
      >
        <FiAlignLeft className={styles.iconSide} />
      </div>
      {sidebar && (
        <div className={styles.sidebarContainer}>
          <div className={styles.sidebar}>
            <Sidebar Data={Data} />
            <TbLayoutSidebarRightExpandFilled
              className={styles.iconClose}
              onClick={() => dispatch(ToggleSidebar())}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneSidebar;

import styles from "./Categories.module.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaCircleChevronDown } from "react-icons/fa6";
import AppList from "./AppList";
import { useState } from "react";

const Categories1 = ({ Data }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = (heading1) => {
    setOpenDropdown(openDropdown === heading1 ? false : heading1);
  };

  const nameClass = openDropdown === Data[0].heading ? "nameOpen" : "name";

  return (
    <>
      {Data.map((data) => (
        <div key={data.heading} className={styles.sidebar}>
          <div
            className={styles.sidebar_cat}
            onClick={() => toggleDropdown(data.heading)}
          >
            <p
              className={`${
                styles[openDropdown === data.heading ? "nameOpen" : "name"]
              }`}
            >
              {data.heading}
            </p>

            <FaCircleChevronDown
              className={styles.arrow}
              style={{
                transform: openDropdown === data.heading && "rotate(180deg)",
                color: openDropdown === data.heading && "aqua",
              }}
            />
          </div>

          {openDropdown === data.heading && (
            <div className={styles.sidebar_bg}>
              <AppList App={data.apps}></AppList>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Categories1;

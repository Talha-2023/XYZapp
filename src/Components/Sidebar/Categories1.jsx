import styles from "./Categories.module.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaCircleChevronDown } from "react-icons/fa6";
import AppList from "./AppList";
import { HandletoggleDropdown } from "../../Store/Features/SidebarCategories";
import { useDispatch, useSelector } from "react-redux";

const Categories1 = ({ Data }) => {
  const dropValue = useSelector((state) => state.SidebarCategories.value);
  const dispatch = useDispatch();

  return (
    <>
      {Data.map((data) => (
        <div key={data.heading} className={styles.sidebar}>
          <div
            className={styles.sidebar_cat}
            onClick={() => dispatch(HandletoggleDropdown(data.heading))}
          >
            <p
              className={`${
                styles[dropValue === data.heading ? "nameOpen" : "name"]
              }`}
            >
              {data.heading}
            </p>

            <FaCircleChevronDown
              className={styles.arrow}
              style={{
                transform: dropValue === data.heading && "rotate(180deg)",
                color: dropValue === data.heading && "aqua",
              }}
            />
          </div>

          {dropValue === data.heading && (
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

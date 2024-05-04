import styles from "./Categories.module.css";
import { FaCircleChevronDown } from "react-icons/fa6";
import AppList from "./AppList";
import { HandletoggleDropdown } from "../../Store/Features/SidebarCategories";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const Categories1 = ({ Data }) => {
  const dropValue = useSelector((state) => state.SidebarCategories.value);
  const dispatch = useDispatch();

  return (
    <>
      {Data.map((data) => (
        <div key={data.heading} className={styles.sidebar}>
          <motion.div
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
          </motion.div>
          <AnimatePresence>
            {dropValue === data.heading && (
              <motion.div
                initial={{ opacity: 0, y: -50, height: 0 }}
                animate={{ opacity: 1, y: 2, height: "auto" }}
                exit={{ opacity: 0, y: -80, height: 0 }}
                className={styles.sidebar_bg}
              >
                <AppList App={data.apps}></AppList>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};

export default Categories1;

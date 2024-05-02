import React, { Children } from "react";
import styles from "./FootNavContainer.module.css";
const FootNavContainer = ({ children }) => {
  return <div className={styles.design_continer}>{children}</div>;
};

export default FootNavContainer;

import styles from "./DisplayContainerDesign.module.css";

const DisplayContainerDesign = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

export default DisplayContainerDesign;

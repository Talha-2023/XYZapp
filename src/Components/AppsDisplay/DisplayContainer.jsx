import styles from "./DisplayContainer.module.css";

const DisplayContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default DisplayContainer;

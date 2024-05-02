import React from "react";
// import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import FootNavContainer from "./FootNavContainer";

const Navbar = () => {
  return (
    <FootNavContainer>
      {/* <div className={styles.logo_cont}>
        <div className={styles.logo_word}>XYZ Apps</div>
        <div className={styles.logo_design}>
          <div className={styles.orange_dot}></div>
          <div className={styles.purple_dot}></div>
          <div className={styles.aqua_dot}></div>
        </div>
      </div> */}
      <Logo />
    </FootNavContainer>
  );
};

export default Navbar;

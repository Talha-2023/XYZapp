import React from "react";
import FootNavContainer from "./FootNavContainer";
import Logo from "../Logo/Logo";
import styles from "./FooterComp.module.css";
const FooterComp = () => {
  return (
    <FootNavContainer>
      <div className={styles.footer}>
        <Logo />
        <p>&copy; XYZapps.com By Talha | 2024 </p>
      </div>
    </FootNavContainer>
  );
};

export default FooterComp;

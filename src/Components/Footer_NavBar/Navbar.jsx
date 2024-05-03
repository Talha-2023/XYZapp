import React from "react";
// import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import FootNavContainer from "./FootNavContainer";

const Navbar = () => {
  return (
    <FootNavContainer>
      <Logo />
    </FootNavContainer>
  );
};

export default Navbar;

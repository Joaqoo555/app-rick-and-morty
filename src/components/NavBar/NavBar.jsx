import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import { useLocation } from "react-router-dom";

const NavBar = (props) => {
  let location = useLocation()
  if(location.pathname === "/"){
    return <></>
  }
  return (
    <nav className={styles.cont_nav}>
      <div className={styles.nav_link}>
        <Link to="/about" className={styles.links_decor}>
          <div className={styles.link}>About</div>
        </Link>
        <Link to="/home" className={styles.links_decor}>
          <div className={styles.link}>Home</div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

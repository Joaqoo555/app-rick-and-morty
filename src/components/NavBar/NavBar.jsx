import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

const NavBar = (props) => {
  return (
    <nav className={styles.cont_nav}>
      <div className={styles.nav_link}>
        <Link to="/about" className={styles.links_decor}>
          <div className={styles.link}>About</div>
        </Link>
        <Link to="/" className={styles.links_decor}>
          <div className={styles.link}>Home</div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import { useLocation } from "react-router-dom";

const NavBar = ({ myLogOut }) => {
  //si estamos en la ruta "/" no se mostrara el navBar
  let location = useLocation();
  if (location.pathname === "/") {
    return <>
    
    </>;
  }
  //renderizado de navbar, con 2 botones, home y logOut
  return (
    <nav className={styles.cont_nav}>
      <div className={styles.nav_link}>
        <Link to="/home" className={styles.links_decor}>
          <div className={styles.link}>Home</div>
        </Link>
        <Link to="/" className={styles.links_decor}>
          <div className={styles.link} onClick={myLogOut}>Log Out</div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import {AiFillLinkedin, AiFillInstagram, AiFillGithub} from "react-icons/ai"
import style from "./footer.module.css"
const Footer = () => {
  return (
    <footer>
      <div className={style.content_icons}>
      <a href="https://github.com/Joaqoo555" className={style.icons}><AiFillGithub className={style.icon}/></a>
      <a href="https://www.instagram.com/joaqo_01/" className={style.icons}><AiFillInstagram className={style.icon}/></a>
       <a href="https://www.linkedin.com/in/joaquin-ezequiel-carrera/" className={style.icons}><AiFillLinkedin className={style.icon}/></a>
      </div>
    </footer>
  );
};

export default Footer;

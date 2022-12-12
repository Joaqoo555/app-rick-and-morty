import React, { useState } from "react";
import Footer from "../Footer/Footer";
import style from "./form.module.css";
import validations from "./validations";

function Form({ myHandleSubmit }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (element) => {
    const valueInput = element.target.value;
    const nameInput = element.target.name;
    setUserData({
      ...userData,
      [nameInput]: valueInput,
    });
    setErrors(
      validations({
        ...userData,
        [nameInput]: valueInput,
      })
    );
  };
  if (window.matchMedia("(min-width: 800px)").matches) {
    return (
      <div className={style.content}>
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault();
            myHandleSubmit(userData);
          }}
        >
         < label htmlFor="username">Username : </label>
  
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            className={errors.username ? style.warning : style.defaultInp}
            autoComplete="off"
          />
          {errors.username && <p>{errors.username}</p>}
         < label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className={errors.password ? style.warning : style.defaultInp}
          />
          <button type="submit" className={style.button}>Enviar</button>
        </form>
        <article className={style.about}><p>Esta aplicacion esta disñada con el objetivo de buscar por medio de nombres o apellidos los personajes de la serie Rick and Morty</p></article>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className={style.content}>
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault();
            myHandleSubmit(userData);
          }}
        >
         < label htmlFor="username">Username : </label>
  
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            className={errors.username ? style.warning : style.defaultInp}
            autoComplete="off"
          />
          {errors.username && <p>{errors.username}</p>}
         < label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className={errors.password ? style.warning : style.defaultInp}
          />
          <button type="submit" className={style.button}>Enviar</button>
        </form>
        <div className={style.footer}><Footer/></div>
      </div>
    );
  }
  
  
}

export default Form;

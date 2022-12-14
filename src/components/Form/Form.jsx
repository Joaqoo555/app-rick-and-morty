import React, { useState } from "react";
import Footer from "../Footer/Footer";
import style from "./form.module.css";
import validations from "./validations";

function Form({ myHandleSubmit }) {
  //estado local de inputs de formulario
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  //estado local de los errores segun el contenido de cada input
  const [errors, setErrors] = useState({});


  const handleChange = (element) => {
    //targets de inputs
    const valueInput = element.target.value;
    const nameInput = element.target.name;

    //actualizacion de estado user
    setUserData({
      ...userData,
      [nameInput]: valueInput,
    });
    //actualizacion de estado error
    setErrors(
      validations({
        ...userData,
        [nameInput]: valueInput,
      })
    );


  };
  //renderizado segun el tamaño de la pantalla
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
         < label htmlFor="username">Username : joaquincarrera@gmail.com</label>
  
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            className={errors.username ? style.warning : style.defaultInp}
            autoComplete="off"
          />
          {errors.username && <p className={style.error_p}>{errors.username}</p>}
         < label htmlFor="password">Password : joaquin1</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className={errors.password ? style.warning : style.defaultInp}
          />
          {errors.password && <p className={style.error_p}>{errors.password}</p>}
          <button type="submit" className={style.button}>Enviar</button>
        </form>
        {/* si el tamaño de la pantalla es mayor a 800px muestra el siguiente texto */}
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
         < label htmlFor="username">Username : joaquincarrera@gmail.com</label>
  
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            className={errors.username ? style.warning : style.defaultInp}
            autoComplete="off"
          />
          {errors.username && <p className={style.error_p}>{errors.username}</p>}
         < label htmlFor="password">Password : joaquin1</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className={errors.password ? style.warning : style.defaultInp}
          />
          {errors.password && <p className={style.error_p}>{errors.password}</p>}
          <button type="submit" className={style.button}>Enviar</button>
        </form>
        <div className={style.footer}><Footer/></div>
      </div>
    );
  }
  
  
}

export default Form;

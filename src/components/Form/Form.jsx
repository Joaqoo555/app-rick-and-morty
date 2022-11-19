import React, { useState } from "react";
import style from "./form.module.css";
import validations from "./validations";

function Form({ myHandleSubmit }) {
    console.log(typeof myHandleSubmit);
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

  return (
    <div>
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hola")
          myHandleSubmit(userData)
        }}
      >
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          className={errors.username ? style.warning : undefined}
          autoComplete="off"
        />
        {errors.username && <p>{errors.username}</p>}

        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          className={errors.password ? style.warning : undefined}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;

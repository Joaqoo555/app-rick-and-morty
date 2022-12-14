import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./details.module.css";

function Details() {
  //estado local de cada carta
  const [character, setCharacter] = useState([]);
  const { name, image, status, species, gender, created } = character;

  const { id } = useParams();

  //Peticion de datos a la API, para mostrar los detalles de una carta especifica
  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character/${id}`;
    const getPersons = (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          if (json.name) {
            setCharacter(json);
          } else {
            alert("No hay personajes con ese ID");
          }
        });
    };
    getPersons(url);
    //escuchando cada vez que cambia el id
  }, [id]);

  return (

    <section  className={style.cont_card}>
      
      <article className={`${style.card} ${style.tittle}`}>
        {" "}
        <h1>{name}</h1>
       </article>

       <figure>
          <img className={style.img} src={image} alt={name}></img>
        </figure>

       <article className={style.card}>
        <p>Estado de vida: {status}</p>
        <p>Especie: {species}</p>
        <p>Genero: {gender}</p>
        <p>Creacion: {created}</p>
      </article>

    </section>
  );
}

export default Details;

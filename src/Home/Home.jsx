import React, { useState } from "react";

import Cards from "../components/Cards/Cards.jsx";
import Header from "../components/Header/Header.jsx";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");
  //Conexion to the API
  async function onSearch(character) {
    //agarro el apellido del personaje si es que lo ingresan, sino solo agarro el nombre
    let apellido = character.split(" ").pop();

    //si tengo datos en characters, le hago un mapeo de los nombres
    const characterNames = new Set(
      characters?.map((personaje) => personaje.name)
    );

    //Creo URL
    const url = `https://rickandmortyapi.com/api/character/?name=${apellido}`;

    try {
      //Peticion a la API
      let res = await fetch(url);
      let json = await res.json();

      //Filtrado de los resultados de la API, por nombre
      const newCharacters = json.results.filter(
        (character) => !characterNames.has(character.name)
      );

      //traigo los personajes que ya tenia y le agrego los nuevos q busque por nombre filtrado
      setCharacters((oldChars) => [...newCharacters,...oldChars, ]);
    } catch {
      //Si hay un error se actualiza mi estado de error
      setError("El nombre ingresado es Incorrecto");
    }
  }
  //Close cards one by one
  const onClose = (id) => {
    const others = characters.filter((element) => {
      if (element.id !== id) return element;
    });
    setCharacters(others);
  };

  //Close all cards
  const onCloseAll = () => {
    setCharacters([]);
  };
  //alert del Error, seteado a valor inicial para que vuelva a llamarse si hay un nuevo error
  const err = ()=>{
    alert(error)
    setError("")
  }
  return (
    <div>
      {error && err()}
      <Header onSearch={onSearch} onCloseAll={onCloseAll} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

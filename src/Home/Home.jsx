import React, { useState } from "react";

import Cards from "../components/Cards/Cards.jsx";
import Header from "../components/Header/Header.jsx";

export default function Home() {
  const [characters, setCharacters] = useState([])

    //Conexion to the API
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        //dont repeat cards with same id
        const aux = characters.filter(personages => personages.id === data.id)
        if(!aux.length > 0){
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      });
  }



  //Close cards one by one
  const onClose = (id) => {
    const others = characters.filter((element) => {
      if (element.id !== id) 
      return element;
    });
    setCharacters(others);
  };

  return (
    <div>
      <Header onSearch={onSearch}/>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

import React, { useState } from "react";

import Cards from "../components/Cards/Cards.jsx";
import Header from "../components/Header/Header.jsx";

export default function Home() {
  const [characters, setCharacters] = useState([]);
   const [obj] = characters;

  // function repeatCondicional(arr, id) {
  //   if(Array.isArray(arr) && arr.length > 0){
  //       for (let i = 0; i < arr.length; i++) {
  //           if(arr[i].id === id){
  //               return false
  //           }else{
  //               return true
  //           }
  //       }
  //   }
  //   return true
  //   }

    //Conexion to the API
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        
        if (true) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }



  //Close cards
  const onClose = (id) => {
    const others = characters.filter((element) => {
      if (element.id !== id) return element;
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

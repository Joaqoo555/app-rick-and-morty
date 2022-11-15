import React, { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
    
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });

  }
  console.log(characters)
    const onClose = (id) => {
        const others = characters.filter((element)=>{
          if(element.id !== id)
          return element
        })
        setCharacters(
          others
        )
    }


  return (
    <div className="App">
      <Header onSearch={onSearch} />
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;

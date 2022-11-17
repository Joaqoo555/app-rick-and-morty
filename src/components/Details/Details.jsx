import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from "react-router-dom"

function Details() {
   const [character, setCharacter] = useState([])
   const { name, image, status, species, gender } = character
   const home = useNavigate()
   const goHome = ()=> home("/home")

   const {id} = useParams()
   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [id]);
  return (
    <div>
      <button onClick={goHome}>Go Home</button>
      <h1>{name}</h1>
      <img src={image} alt={name}></img>
      <h1>{status}</h1>
      <h1>{species}</h1>
      <h1>{gender}</h1>
    </div>
  )
}

export default Details

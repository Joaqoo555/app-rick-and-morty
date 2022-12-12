import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from "react-router-dom"

function Details() {
   const [character, setCharacter] = useState([])
   const { name, image, status, species, gender } = character
   const home = useNavigate()
   const goHome = ()=> home("/home")

   const {id} = useParams()
   useEffect(() => {
      let url = `https://rickandmortyapi.com/api/character/${id}`
      const getPersons = async (url)=>{
         let res = await fetch(url),
         json = await res.json();
         if (json.name) {
            setCharacter(json);
         } else {
            alert('No hay personajes con ese ID');
         }
      }
      getPersons(url)

      return setCharacter({});
   }, [id]);
  return (
    <section>
      <button onClick={goHome}>Go Home</button>
      <h1>{name}</h1>
      <img src={image} alt={name}></img>
      <h1>{status}</h1>
      <h1>{species}</h1>
      <h1>{gender}</h1>
    </section>
  )
}

export default Details

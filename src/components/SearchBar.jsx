import styles from "../styles/searchBar.module.css"
import {FcSearch} from "react-icons/fc"



export default function SearchBar({onSearch}) {
   const handleSearch = ()=>{
      const input = document.getElementById("input").value;
      if(input){
         onSearch(input)
      }else{
         alert("No se Ingresaron valores")
      }
   }
   return (
      <div className={styles.searchBar}>
          <input type='search' id="input" className={styles.input} placeholder="Search"/> 
      <button onClick={handleSearch} className={styles.btn}>Agregar</button> 
      </div>
   );
}

import styles from "../styles/searchBar.module.css"

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
          <input type='search' id="input" className={styles.input}/>
      <button onClick={handleSearch} className={styles.btn}>Agregar</button> 
      </div>
   );
}

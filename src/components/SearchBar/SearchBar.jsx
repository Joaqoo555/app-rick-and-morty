import styles from "./searchBar.module.css";
import { FcSearch } from "react-icons/fc";
import { useMemo, useState } from "react";

export default function SearchBar({ onSearch, onCloseAll }) {
  
  //data que contiene el input
  const [data, setData] = useState("");

  //funcion handler para setear el estado data con el contenido del input
  function handleChange({ target }) {
    setData(target.value);
  }

  //funcion handler para buscar lo que hay en el input, ademas de setear el estado a inicial devuelta
  const handleSearch = () => {
    onSearch(data);
    setData("");
  };

  const disabled = useMemo(() => {
    if (data.length > 0 && typeof data === "string") return false;
    return true;
  }, [data]);

  return (
    <div className={styles.searchBar}>
      {/* input search */}
      <div className={styles.content_icon}>
        <div className={styles.icon}>
          {" "}
          | <FcSearch style={styles.lens} onClick={handleSearch} />{" "}
        </div>
        <input
          type="search"
          id="input"
          className={styles.input}
          placeholder="Example: Rick Sanchez"
          value={data}
          onChange={handleChange}
        />
      </div>
      {/* Boton buscador de lo que contiene el input search */}
      <div className={styles.divButtons}>
        <button
          onClick={handleSearch}
          className={styles.btn_1}
          disabled={disabled}
        >
          Buscar por apellido
        </button>

      {/* Boton clear de todas las cartas */}
        <button onClick={onCloseAll} className={styles.btn_2}>
          Cerrar todas las cartas
        </button>
      </div>
    </div>
  );
}

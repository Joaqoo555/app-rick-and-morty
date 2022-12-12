import styles from "./searchBar.module.css";
import { FcSearch } from "react-icons/fc";
import { useMemo, useState } from "react";

export default function SearchBar({ onSearch, onCloseAll }) {
  const [data, setData] = useState("");
  
  function handleChange({ target }) {
    setData(target.value);
  }
  const handleSearch = () => {
    setData("")
    onSearch(data)
  };
  const disabled = useMemo(() => {
    if (data.length > 0 && typeof data === "string") return false;
    return true;
  }, [data]);
  
  return (
    <div className={styles.searchBar}>
      <div className={styles.content_icon}>
        <div className={styles.icon}>
          {" "}
          | <FcSearch style={styles.lens}/>
          {" "}
        </div>
        <input
          type="search"
          id="input"
          className={styles.input}
          placeholder="Search your personage"
          value={data}
          onChange={handleChange}
        />
      </div>
    <div className={styles.divButtons}>
      
    <button onClick={handleSearch} className={styles.btn_1} disabled={disabled}>
        Add new Card
      </button>
      <button onClick={onCloseAll} className={styles.btn_2} >
        Close all Cards
      </button>
    </div>
    </div>
  );
}

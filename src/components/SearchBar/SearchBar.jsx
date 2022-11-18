import styles from "./searchBar.module.css";
import { FcSearch } from "react-icons/fc";
import { useMemo, useState } from "react";

export default function SearchBar({ onSearch, randomSearch }) {
  const [data, setData] = useState("");
  function handleChange({ target }) {
    setData(target.value);
  }
  const handleSearch = () => onSearch(data);


  const disabled = useMemo(() => {
    if (data.length > 0 && typeof data === "string") return false;
    return true;
  }, [data]);
  
  //Random Id
  const handleRandomId = ()=> {
    let numberRandom = parseInt(1 + Math.random() * 800)
    console.log(numberRandom);
     return onSearch(numberRandom)
  }
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
      
    <button onClick={handleSearch} className={styles.btn_1} disabled={disabled} >
        Add new Card
      </button>
      <button onClick={handleRandomId} className={styles.btn_2} >
        Random Button
      </button>
    </div>
    </div>
  );
}

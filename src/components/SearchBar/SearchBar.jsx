import styles from "./searchBar.module.css";
import { FcSearch } from "react-icons/fc";

export default function SearchBar({ onSearch }) {
  const handleSearch = () => {
    const input = document.getElementById("input").value;
    if (input) {
      onSearch(input);
    } else {
      alert("No se Ingresaron valores");
    }
  };

  const onChange = ({ target }) => target.value;

  return (
    <div className={styles.searchBar}>
      <div className={styles.content_icon}>
        <div className={styles.icon}>
          {" "}
          | <FcSearch />
          {" "}
        </div>
        <input
          type="search"
          id="input"
          className={styles.input}
          placeholder="Search"
          onChange={onChange}
        />
      </div>
      <button onClick={handleSearch} className={styles.btn}>
        Add new
      </button>
    </div>
  );
}

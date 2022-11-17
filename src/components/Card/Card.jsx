import styles from "./card.module.css";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Card({ id, name, species, gender, image, onClose }) {
  const handleOnClose = () =>
    typeof onClose === "function" ? onClose(id) : alert("No funciona");

  //styles of name in line
  return (
    <div className={styles.card}>
      <div className={styles.content_btn}>
        <button onClick={handleOnClose} className={styles.btn}>
          {" "}
          <TfiClose />{" "}
        </button>
      </div>
      <Link to={`/detail/${id}`} className={styles.name_style}>
        <img src={image} alt={name} className={styles.img} />

        <p className={styles.tittles}>{name}</p>

        <p className={styles.species}>Specie: {species}</p>
        <p className={styles.gender}>Sex: {gender}</p>
      </Link>
    </div>
  );
}
export default Card;

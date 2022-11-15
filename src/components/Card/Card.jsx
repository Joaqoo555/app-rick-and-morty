
import styles from "./card.module.css";
import {TfiClose} from "react-icons/tfi"

function Card({ name, species, gender, image, onClose }) {
  const handleOnClose = () => (typeof onClose === "function") ? onClose() : alert("No funciona")
  return (
    <div className={styles.card}>
      <div className={styles.content_btn}>
      <button onClick={handleOnClose} className={styles.btn}> < TfiClose/> </button>
      </div>
      <img src={image} alt={name} className={styles.img}/>
      <p className={styles.tittles}>Name: {name}</p>
      <p className={styles.species}>Specie: {species}</p>
      <p className={styles.gender}>Sex: {gender}</p>
    </div>
  );
}
export default Card;
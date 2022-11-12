
import styles from "../styles/card.module.css";
import {IoMdCloseCircleOutline} from "react-icons/io"

function Card({ name, species, gender, image, onClose }) {
  const handleOnClose = () => (typeof onClose === "function") ? onClose() : alert("No funciona")
  return (
    <div className={styles.card}>
      <div className={styles.content_btn}>
      <button onClick={handleOnClose} className={styles.btn}> < IoMdCloseCircleOutline /> </button>
      </div>
      <h2 className={styles.tittles}>{name}</h2>
      <h2 className={styles.species}>{species}</h2>
      <h2 className={styles.gender}>{gender}</h2>
      <img src={image} alt={name} className={styles.img}/>
    </div>
  );
}
export default Card;
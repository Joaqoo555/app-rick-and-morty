import styles from "./card.module.css";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Card({ id, name, species, gender, image, onClose, status}) {

  //status unknown, alive, dead

  const handleOnClose = () =>
    typeof onClose === "function" ? onClose(id) : alert("No funciona");

  return (
    <article className={styles.card}>
      <i className={styles.status}>{status}</i>
      {/* button close */}
      <div className={styles.content_btn}>
        <button onClick={handleOnClose} className={styles.btn}>
          {" "}
          <TfiClose />{" "}
        </button>
      </div>

      {/* details of cards */}
      <Link to={`/detail/${id}`} className={styles.name_style}>

        <img src={image} alt={name} className={styles.img} />
        <p className={styles.tittles}>{name}</p>
        <p className={styles.species}>Specie: {species}</p>
        <p className={styles.gender}>Sex: {gender}</p>
        
      </Link>
    </article>
  );
}
export default Card;

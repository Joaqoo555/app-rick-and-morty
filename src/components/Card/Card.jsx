import styles from "./card.module.css";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Card({ id, name, image, onClose, status }) {
  
  //Funcion handle para cada close card
  const handleOnClose = () =>
    typeof onClose === "function" ? onClose(id) : alert("No funciona");

  return (
    <article className={styles.card}>
      {/* status de vida */}
      {(() => {
        if (status === "Dead") {
          return <div className={`${styles.color_red} ${styles.color}`}></div>;
        } else if (status === "Alive") {
          return (
            <div className={`${styles.color_green} ${styles.color}`}></div>
          );
        } else {
          return <div className={`${styles.color_grey} ${styles.color}`}></div>;
        }
      })()}
      <i>{status}</i>

      {/* button close */}
      <div className={styles.content_btn}>
        <button onClick={handleOnClose} className={styles.btn}>
          {" "}
          <TfiClose />{" "}
        </button>
      </div>

      {/* details of cards by id*/}
      <Link to={`/detail/${id}`} className={styles.name_style}>
        <img src={image} alt={name} className={styles.img} />
        <p className={styles.tittles}>{name}</p>
      </Link>
    </article>
  );
}
export default Card;

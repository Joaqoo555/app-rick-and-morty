import Card from "../Card/Card.jsx";
import styles from "./cards.module.css";

export default function Cards({ characters, onClose }) {
  //Map para el renderizado de cartas
  const chars = characters.map((element, index) => {
    return (
      <Card
        key={index}
        id={element.id}
        name={element.name}
        species={element.species}
        gender={element.gender}
        image={element.image}
        status={element.status}
        onClose={onClose}
      />
    );
  });
  return <section className={styles.cards}>{chars}</section>;
}

import Card from '../Card/Card.jsx';
import styles from "./cards.module.css"

export default function Cards({characters, onClose}) {
   const chars = characters.map((element, index)=>{
      return <Card key={index}
      id={element.id}
      name={element.name}
      species={element.species}
      gender={element.gender}
      image={element.image}
      onClose={onClose}
    />
    })
   return <div className={styles.cards}>
         {chars}
   </div>;
}

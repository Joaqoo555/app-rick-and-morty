import Card from './Card';
import styles from "../styles/cards.module.css"

export default function Cards({characters}) {
   const chars = characters.map((element, index)=>{
      return <Card key={index}
      name={element.name}
      species={element.species}
      gender={element.gender}
      image={element.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}
    />
    })
   return <div className={styles.cards}>
         {chars}
   </div>;
}

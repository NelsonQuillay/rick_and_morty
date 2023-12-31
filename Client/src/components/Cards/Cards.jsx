import style from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards({characters, onClose}) {
   return (
   <div className={style.contenedor}>
      {
         characters.map(({id, name, species, gender, image}) => {
            return(
               <Card
                  key={id}
                  id={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={onClose}
               />
            )
         })
      }
   </div>
   )
}

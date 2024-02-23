import { NavLink} from "react-router-dom"
import styles from './card.module.css'
function Card({id, name, image, genres, rating}){
  
return(
<div className={styles.container} >
    <div className={styles.card}>
    <div>
         <NavLink to={`/detail/${id}`}><img src={image} className={styles.imagen}/></NavLink>
    </div>
    <div className={styles.datos}>
      <h2 className={styles.name}>{name}</h2> 
      <h2>ID: {id}</h2> 
      <h2>Rating: {rating}</h2>
      <h2>Genres: {genres}</h2>
    </div>
   </div>
  </div>
)
}
export default Card;
import styles from './inicio.module.css'
import { NavLink} from "react-router-dom";


function Inicio() {
     return(
         <div className={styles.backgroundinicio}>
           <div className={styles.container}>
            <img src='https://i.ibb.co/1JWyb82/Video-Game-Controller-Logo-Graphics-69127373-1-1-580x387-imageonline-co-4943474-3.png' className={styles.imagen}></img>
            <h5><p className={styles.titulo}>VideoGames</p></h5>
            <br></br>
            <h5><p className={styles.texto}>Welcome to our webpage featuring a diverse selection of games, each accompanied by detailed information.
              <br/>Explore our collection and easily filter games by genre or sort them by name and rating. 
              <br/>Additionally, unleash your creativity by crafting your very own video game, which will be securely stored in our database for your future enjoyment!</p>
            </h5>
            <br></br>
            <br></br>
            <h5><p className={styles.enter}>Click on Start to enter</p></h5>
    
           </div>
           <NavLink to='/home' className={styles.boton}>START</NavLink>
         </div>
    )   
}

export default Inicio
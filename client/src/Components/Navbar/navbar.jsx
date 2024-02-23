
import { NavLink} from "react-router-dom";
import Style from './Nav.module.css'

export default function Nav() {
   return (
    <div className={Style.container}>
      <img src="https://i.ibb.co/1JWyb82/Video-Game-Controller-Logo-Graphics-69127373-1-1-580x387-imageonline-co-4943474-3.png" className={Style.imagen}/>
      <p className={Style.randomtext}>VIDEOGAMES</p>
     <NavLink to='/home' className={Style.link}><p>Games</p></NavLink>
     <NavLink to='/form' className={Style.link}><p>Create a Game</p></NavLink>
     <NavLink to='/About' className={Style.link}><p>About</p></NavLink>
     <NavLink to='/' className={Style.link}><p>Exit</p></NavLink>
     <div className={Style.agregar}>
     </div>
    </div>
   );
}
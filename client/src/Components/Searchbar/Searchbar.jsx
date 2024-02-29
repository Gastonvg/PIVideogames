import {useEffect, useState} from 'react';
import styles from './searchbar.module.css'
import { orderalf, orderrating, filterid, ordergen} from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';


const SearchBar = ({onSearch}) => {
   const opciongender = useSelector(state => state.typegenre);
   const opcionid = useSelector(state => state.typeid);
   const dispatch = useDispatch();
   const [id, setid] = useState('')
   function handleChange(evento) {
      setid(evento.target.value);
       }
       const search = () => {
         onSearch(id);
         setid(''); 
      };
   const handleOrderalf = (evento) =>{
    dispatch(orderalf(evento.target.value))
  }
  const handleRat = (evento) => {
    dispatch(orderrating(evento.target.value))
  }
  const handleid = (evento) => {
    dispatch(filterid(evento.target.value))
  }
  const handlegen = (evento) =>{
    dispatch(ordergen(evento.target.value))
  }
  const handleKeyDown = (evento) => {
   if (evento.key === 'Enter') {
      search();
      }
   };

   return (
      <div className={styles.container}>
          <div className={styles.filtros}>
          <span className={styles.opciones}>Sort by Letter&nbsp;
               <select name='order' defaultValue='orderCharacter' onChange={handleOrderalf} className={styles.selector}>
                <option value="OrderCharacter" disabled='disable'>Order...</option>
                <option value="A">A-Z</option>
                <option value="D">Z-A</option>
              </select>
           </span>
           <span className={styles.opciones}>Sort by Rating&nbsp;
               <select name='order' defaultValue='orderCharacter' onChange={handleRat} className={styles.selector}>
                <option value="OrderCharacter" disabled='disable'>Order...</option>
                <option value="A">low-top</option>
                <option value="D">top-low</option>
              </select>
           </span>
           <div className={styles.buscar}>
          <input className={styles.barra} onChange={handleChange} onKeyDown={handleKeyDown} value={id}
                  type="text"
                  placeholder="Search video games..."
               />
              <button type="submit" onClick={search} className={styles.botontodos}>Search</button>
          </div>
           <span className={styles.opciones}>Filter by Origin&nbsp;
               <select name='order by origin' defaultValue={opcionid} onChange={handleid} className={styles.selector}>
                <option value="OrderCharacter" disabled='disable'>Order...</option>
                <option value="All">All</option>
                <option value="database">Database</option>
                <option value="api">Api</option>
              </select>
           </span>
           <span className={styles.opciones}>Filter by Genre&nbsp;
               <select name='order by origin' defaultValue={opciongender} onChange={handlegen} className={styles.selector}>
                <option value="OrderCharacter" disabled='disable'>Genrer...</option>
                <option value="All">All</option>
                <option value="Action">Action</option>
                <option value="Indie">Indie</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Strategy">Strategy</option>
                <option value="Shooter">Shooter</option>
                <option value="Casual">Casual</option>
                <option value="Simulation">Simulation</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Platformer">Platformer</option>
                <option value="Racing">Racing</option>
                <option value="Massively Multiplayer">Massively Multiplayer</option>
                <option value="Sports">Sports</option>
                <option value="Fighting">Fighting</option>
                <option value="Family">Family</option>
                <option value="Board Games">Board Games</option>
                <option value="Card">Card</option>
              </select>
           </span>
        </div>
      </div>
   );
}


export default SearchBar;

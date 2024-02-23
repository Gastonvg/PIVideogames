import styles from './home.module.css'
import Cards from '../Cards/Cards'
import SearchBar from '../Searchbar/Searchbar';



function Home({onSearch}) {
     return(
      <div className={styles.back}>
        <div className={styles.container}>
        <div className={styles.barra}>
          <SearchBar onSearch={onSearch} className={styles.barra}/>
       </div>
       <div className={styles.luz}>
            <Cards />
       </div>
       </div>
     </div>
    )   
}

export default Home
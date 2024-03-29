import Card from '../Card/Card'
import styles from './cards.module.css'
import { useSelector } from 'react-redux';
import { useState, useEffect} from 'react';

export default function Cards() {
    const videogames = useSelector(state => state.videogames);
    const [paginado, setPaginado] = useState(1);
    const [loading, setLoading] = useState(true);
    const pageSize = 15;

    const startIndex = (paginado - 1) * pageSize;
    const endIndex = paginado * pageSize;
    const videofinal = videogames.slice(startIndex, endIndex);

    const totalPages = Math.ceil(videogames.length / pageSize);

    const sumpag = () => {
        if (paginado < totalPages) {
            setPaginado(prevPaginado => prevPaginado + 1);
        }
    };

    const restpag = () => {
        if (paginado > 1) {
            setPaginado(prevPaginado => prevPaginado - 1);
        }
    };
    useEffect(() => {
        if (videogames.length > 0) setLoading(false)
        const totalPages = Math.ceil(videogames.length / pageSize);
        if (paginado > totalPages) {
            setPaginado(1);
        }
    }, [videogames, paginado]);
    return(
        <div className={styles.container}>
        {loading ? ( 
            <div className={styles.loading}>
                <img src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif'></img>
            </div>
        ) : (
            <>
                <div className={styles.paginado}>
                    <button onClick={restpag} className={styles.boton}> &lt; </button>
                    <p className={styles.pagina}>{paginado}</p>
                    <button onClick={sumpag} className={styles.boton2}> &gt; </button>
                </div>
                {videofinal.map(game => {
                    const platformsgenres = game.genres?.map(genres => genres.name);
                    return (
                        <Card
                            videogames={videogames}
                            image={game.image}
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            hard={game}
                            rating={game.rating}
                            genres={platformsgenres && platformsgenres.join(', ')}
                        />
                    );
                })}
                <div className={styles.paginado}>
                    <button onClick={restpag} className={styles.boton}> &lt; </button>
                    <p className={styles.pagina}>{paginado}</p>
                    <button onClick={sumpag} className={styles.boton2}> &gt; </button>
                </div>
            </>
        )}
    </div>
);
}

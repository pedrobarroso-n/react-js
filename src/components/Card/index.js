import styles from './Card.module.css';
import { useFavoritosContext } from 'contexts/Favoritos';
import iconeFavoritar from './favorite_outline.png';
import iconeDesfavoritar from './favorite.png';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritosContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar} 
                onClick={() => {
                    adicionarFavorito({id, titulo, capa})
                }}/>
        </div>

    )
}

export default Card;
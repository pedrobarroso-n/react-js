import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos';

export default function FavoritosProvider({ children }) {
    const [favorito, setFavoritos] = useState([]);

    return (
        <FavoritosContext.Provider value={{favorito, setFavoritos}}>
            {children}
        </FavoritosContext.Provider>
    )    
}

export function useFavoritosContext() { // custom hook for new a context
    const {favorito, setFavoritos} = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);
        let novaLista = [...favorito];

        if (!favoritoRepetido) { // add item case it's don't favorite
            novaLista.push(novoFavorito);
            return setFavoritos(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1); // delete item case it's do favorite
        return setFavoritos(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }
}   
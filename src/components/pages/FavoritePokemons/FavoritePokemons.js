import { useSelector } from "react-redux"
import PokemonList from "../../UI/PokemonList/PokemonList"


export const FavoritePokemons = () => {
    const favorites = useSelector(state => state.pokemons.favorites)
return( 
    <>
    {favorites.length > 0? <PokemonList pokemons={favorites}/>:<div>no favorite pokemons</div>}
    </>
)
}
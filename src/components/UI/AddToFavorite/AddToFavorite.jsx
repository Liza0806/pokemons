import { ReactSVG } from "react-svg";
import favorite from "../../../svg/favourite.svg";
import { Btn } from "./AddToFavorite.styled";
// import { useDispatch } from "react-redux";
import { addToFavorite } from "../../../redux/api";
// import { addToFavorites } from "../../../redux/pokemonSlice";

export const AddToFavorite = ({pokemon}) => {
   // const dispatch = useDispatch()

const handleAddToFavorites = (pokemon) => {
    console.log(pokemon, 'pokemon in add to handler')
addToFavorite(pokemon)
}
    return(
        <Btn onClick={ ()=> handleAddToFavorites(pokemon)}>
        <ReactSVG src={favorite} pokemon={pokemon}/>
        add to favorite
      </Btn>
    )
}
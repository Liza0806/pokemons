import { useSelector } from "react-redux";
import { Abilities } from "../Abilities/Abilities";
import { StyledPokemonInfo } from "./PokemonInfo.styled";
import { ReactSVG } from "react-svg";
import favorite from "../../../svg/favourite.svg";
import { AddToFavorite } from "../AddToFavorite/AddToFavorite";

export const PokemonInfo = () => {
  const pokemonItem = useSelector((state) => state.pokemons.pokemonItem);
  const abilities = useSelector(
    (state) => state.pokemons.pokemonItem.abilities
  );

  return (
    <StyledPokemonInfo>
      <div>
        <div>
         <AddToFavorite pokemon={pokemonItem}/>
        </div>
        <div>
          <p>weight: {pokemonItem.weight}</p>
          <p>height: {pokemonItem.height}</p>
          <p>base experiense: {pokemonItem.base_experience}</p>

          {abilities &&
            abilities.map((a) => {
              return <Abilities name={a.ability.name} key={a.ability.name} />;
            })}
        </div>
        <div>
         
          <img
            src={pokemonItem?.sprites?.other?.showdown?.front_default}
            alt={pokemonItem.name}
          />
        </div>
      </div>
    </StyledPokemonInfo>
  );
};

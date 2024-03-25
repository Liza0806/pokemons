import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonItem } from "../../../redux/operations";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonInfo } from "../../UI/PokemonInfo/PokemonInfo";
import { StyledPokemonWrapper } from "./PokemonItem.styled";

export const PokemonItem = () => {
  const dispatch = useDispatch();
  const pokemonItem = useSelector((state) => state.pokemons.pokemonItem);
  const { pokemonId } = useParams();

  console.log(pokemonId, "id in poke item");
  useEffect(() => {
    dispatch(fetchPokemonItem(pokemonId));
  }, [dispatch]);

  return (
    <StyledPokemonWrapper>
      {pokemonItem && (
        <>
          <h1>{pokemonItem.name}</h1>

          <img
            src={pokemonItem?.sprites?.["official-artwork"]?.front_default}
            alt={pokemonItem.name}
          />
          <PokemonInfo />
        </>
      )}
    </StyledPokemonWrapper>
  );
};

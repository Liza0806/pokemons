import React from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { ForPokemons } from "./PokemonList.styled";

 const PokemonList = ({ pokemons }) => {

  return (
    <ForPokemons>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ForPokemons>
  );
};
export default PokemonList
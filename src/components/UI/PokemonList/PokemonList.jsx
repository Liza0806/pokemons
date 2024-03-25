import React from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { ForPokemons } from "./PokemonList.styled";
import { useSelector } from "react-redux";

 const PokemonList = ({ pokemons }) => {
const page = useSelector((state)=> state.pokemons.page);
const perPage = useSelector((state)=> state.pokemons.perPage);
console.log(page, perPage, 'page, perPage')
  return (
    <ForPokemons>
      {pokemons.map((pokemon) => {
      //  console.log(page, perPage, pokemon.id, 'page, perPage, index')
      
        if(pokemon.id < page * perPage){
          return   <PokemonCard key={pokemon.id} pokemon={pokemon} />
        }  return null;
     }
   
      )}
    </ForPokemons>
  );
};
export default PokemonList
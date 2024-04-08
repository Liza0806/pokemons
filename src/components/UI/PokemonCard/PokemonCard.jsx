import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, Image, Name, StyledLink } from './PokemonCard.styled'
import { AddToFavorite } from "../AddToFavorite/AddToFavorite";

export const PokemonCard = ({ pokemon }) => {
//  console.log(pokemon, 'pokemon in PokemonCard')
 
  return (
    <CardContainer>
      <StyledLink to={`/${pokemon.id}`}>
        <Image src={pokemon.urlImg} alt={pokemon.name} />
        <Name>{pokemon.name}</Name>
       
      </StyledLink> <AddToFavorite pokemon={pokemon} />
    </CardContainer>
  );
};


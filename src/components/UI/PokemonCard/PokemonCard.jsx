import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, Image, Name, StyledLink } from './PokemonCard.styled'

export const PokemonCard = ({ pokemon }) => {
  return (
    <CardContainer>
      <StyledLink to={`/${pokemon.id}`}>
        <Image src={pokemon.urlImg} alt={pokemon.name} />
        <Name>{pokemon.name}</Name>
      </StyledLink>
    </CardContainer>
  );
};


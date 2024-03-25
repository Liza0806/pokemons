import styled from "styled-components";

export const StyledPokemonInfo = styled.div`
display: inline;
  background-color: #283747;
  color: #ffffff; 
  padding: 20px; 
  border-radius: 8px; 
  font-family: "Goldman", sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

 > div  {
    display: flex;
    gap: 10px;
  }
button {
  background-color:transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-family: "Goldman", sans-serif;
  font-weight: 400;
  font-size: 14px;
}
svg {
  fill:  #ffffff;
  stroke: transparent;

  &:hover{
    stroke: #ffffff;
  }
}

`;
import styled, { keyframes } from "styled-components";
// const flashAnimation = keyframes`
//   0% {
//     background-color: #CCCCCC;
//   }
//   50% {
//     background-color: #1ABC9C;
//   }
//   100% {
//     background-color: #CCCCCC;
//   }
// `;
export const Ability = styled.div`
  background-color: #CCCCCC;
  display: inline-block;
  color: #1c2833;
  padding: 8px 16px; 
  border-radius: 8px; 
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); 
  font-family: "Goldman", sans-serif;
  font-weight: 400;
  text-align: center;
  &:hover {
    background-color: #1ABC9C;
  }
`;

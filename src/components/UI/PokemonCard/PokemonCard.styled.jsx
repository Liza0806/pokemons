import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  background-color: #283747;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
  &:hover {
    outline: 4px solid #283747;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 4px;
`;

export const Name = styled.p`
  color: #ffffff;
  margin-top: 10px;
  font-family: "Goldman", sans-serif;
  font-weight: 700;
  font-size: 26px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #283747;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Goldman', sans-serif;
  font-size: 26px;
  font-weight: 700;

  a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    &:hover{
        text-decoration-line: underline
    }
  }
`;
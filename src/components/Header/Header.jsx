
import { Link } from "react-router-dom";
import { StyledNav } from "./Header.styled";



export const Header = () => {
    return (
      <StyledNav >
       <Link to='/'>Home</Link>
       <Link to='/favorites'>Favorites</Link>
      </StyledNav>
    );
  };
  
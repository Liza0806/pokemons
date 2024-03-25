import { useDispatch, useSelector } from "react-redux";
import { StyledDiv } from "./Form.styled";
import { fetchPokemonItem } from "../../../redux/operations";
import { setFilter } from "../../../redux/filterSlice";

export const SearchForm = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter.filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filter, "filter");
    dispatch(fetchPokemonItem(filter));
  };
  const findPokemon = (e) => {
    const newFilter = e.target.value.toLowerCase();
    dispatch(setFilter(newFilter));
  };
  return (
    <StyledDiv>
      <h1>Find pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={findPokemon} value={filter}></input>
        <button>search</button>
      </form>
    </StyledDiv>
  );
};

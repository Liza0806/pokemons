import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonItem, fetchPokemonsList } from "../../../redux/operations";
//import { pokemonItem, filter } from "../redux/selectors";
import { setFilter } from "../../../redux/filterSlice";
// import { PokemonList } from "../../UI/PokemonList/PokemonList";
import { StyledDiv } from "./Main.styled";
import { SearchForm } from "../../UI/Form/Form";
import { setPokemons, showMore } from "../../../redux/pokemonSlice";

const PokemonList = React.lazy(() => import('../../UI/PokemonList/PokemonList'));


const Main = () => {

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);
  let pokemons = useSelector((state) => state.pokemons.pokemons);
 
  useEffect(() => {
    // const pokemonsLS = JSON.parse(localStorage.getItem("pokemons"));
    // if (pokemonsLS) {
    //   dispatch(setPokemons(pokemonsLS));
    //   return;
    // }
    dispatch(fetchPokemonsList());
  }, []);

  let filteredPokemons = pokemons;
  if (pokemons) {
    console.log(pokemons.length)
    filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.includes(filter)
    );
  }
const showMoreHandler = () => {
  dispatch(showMore())
}
  return (
    <div>
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <SearchForm />
      {pokemons && (
        <PokemonList
          pokemons={filteredPokemons ? filteredPokemons : pokemons}
        />
      )}
      </Suspense>
      <button type="button" onClick={showMoreHandler}>Show more</button>
    </div>
  );
};

export default Main
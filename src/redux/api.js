import axios from "axios";

export const fetchByName = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    console.log(response.data, "response.data in api item");
    const pokemon = createPokemonObject(response.data);
    console.log(pokemon, "pokemon in api");
    return pokemon;
  } catch (error) {
    throw error;
  }
};

export const getPokemons = async () => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=1279/`
    );
   // console.log(response, "response", response.data, "response.data");
    const pokemons = getPokemonsWithImg(response.data.results);
    localStorage.setItem('pokemons', JSON.stringify(pokemons))
   // console.log(pokemons);
    return pokemons;
  } catch (error) {
    throw error;
  }
};

const getPokemonsWithImg = (pokemons) => {
  return pokemons.map((pokemon, index) => ({
    id: index + 1,
    url: pokemon.url,
    urlImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      index + 1
    }.png`,
    name: pokemon.name,
  }));
};
const createPokemonObject = (pokemon) => {
  const imageUrls = {...pokemon.sprites, ...pokemon.sprites.other}
  const pokemonObject = {
    abilities: pokemon.abilities,
    base_experience: pokemon.base_experience,
    height: pokemon.height,
    name: pokemon.name,
    weight: pokemon.weight,
    sprites: imageUrls,
  };
  return pokemonObject
};

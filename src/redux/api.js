import axios from "axios";

export const fetchByName = async (name) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    console.log(response.data, "response.data in api item");
   // const pokemon = createPokemonObject(response.data);
   // console.log(pokemon, "pokemon in api");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const addToFavorite = async ({_id}) => {
  try {
    const responsePokemon = await axios.get(`https://pokemonsbackend-t9op.onrender.com/api/pokemons/${_id}`);
    const currentData = responsePokemon.data;
  //  console.log(currentData, 'currentData')
    const updatedData = {
      ...currentData,
      favorite: !currentData.favorite
    };
    console.log(updatedData, 'updatedData')
    const response = await axios.put(`https://pokemonsbackend-t9op.onrender.com/api/pokemons/${_id}`, updatedData)
    console.log('try patch or put')
    return response.data;
  }
  catch (error) {
    throw error;
  }

}
export const getPokemons = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/pokemons/`
    );
   // console.log(response.data, "response.data");

    const pokemons = getPokemonsWithImg(response.data);
    localStorage.setItem('pokemons', JSON.stringify(pokemons))
   console.log(pokemons);
    return pokemons;
  } catch (error) {
    throw error;
  }
};

const getPokemonsWithImg = (pokemons) => {
  return pokemons.map((pokemon) => ({
    _id: pokemon._id,
    id: pokemon.id,
    url: pokemon.url,
    urlImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      pokemon.id + 1
    }.png`,
    name: pokemon.name,
  }));
};


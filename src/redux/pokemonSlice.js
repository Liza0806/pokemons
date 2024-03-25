import { createSlice } from "@reduxjs/toolkit";
import { pokemonState } from "./pokemonState";
import { fetchPokemonItem, fetchPokemonsList } from "./operations";

const pokemonSlice = createSlice({
name: 'pokemons',
initialState: pokemonState,
reducers:  {    
    setPokemons: (state, action) => {
        state.pokemons = action.payload;
      },
    showMore: (state)=>{
        console.log(state.page, "state.page")
    state.page += state.page
      }
    },
extraReducers: (builder) => {
    builder
    .addCase(fetchPokemonItem.pending, (state) => {
        state.isLoading = true
        console.log('pending')
    })
    .addCase(fetchPokemonItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.pokemonItem = action.payload
        console.log(action.payload)
    })
    .addCase(fetchPokemonItem.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        console.log(action.payload, 'error')
    })
    .addCase(fetchPokemonsList.pending, (state) => {
        state.isLoading = true
        console.log('pending')
    })
    .addCase(fetchPokemonsList.fulfilled, (state, action) => {
        state.pokemons = action.payload
        state.isLoading = false
       
        console.log(action.payload)
    })
    .addCase(fetchPokemonsList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        console.log(action.payload, 'error')
    })
}})
// "https://pokeapi.co/api/v2/
export const { setPokemons, showMore} = pokemonSlice.actions;
export default pokemonSlice.reducer;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonReducer from './pokemonSlice'
import filterReducer from './filterSlice'

export const store = configureStore({
    reducer:   combineReducers({
        pokemons: pokemonReducer,
        filter: filterReducer,
      })
})
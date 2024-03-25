import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from './api'

export const fetchPokemonItem = createAsyncThunk(
    'pokemons/fetchPokemonItem',
    async (name, thunkAPI) => {
      const response = await API.fetchByName(name);
      return response;
    }
  );
  
  
export const fetchPokemonsList = createAsyncThunk(
    'pokemons/fetchPokemonsList',
    async (thunkAPI) => {
      const response = await API.getPokemons();
      return response;
    }
  );
  
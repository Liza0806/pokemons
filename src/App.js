import "./App.css";
// import { Main } from "./components/pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { PokemonItem } from "./components/pages/PokemonItem/PokemonItem";
import { FavoritePokemons } from "./components/pages/FavoritePokemons/FavoritePokemons";
import React, { Suspense, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/variables/theme";
import { useSelector } from "react-redux";

const Main = React.lazy(() => import('./components/pages/Main/Main'));

function App() {
 
  return (
    <div className="App">
      <div className="App">
        {/* <ThemeProvider theme={theme}> */}
            <Suspense fallback={<h1>Loading!</h1>}>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/favorites" element={<FavoritePokemons/>} />
            <Route path="/:pokemonId" element={<PokemonItem />} />
          </Route>
        </Routes>
     </Suspense>
        {/* </ThemeProvider> */}
      
      </div>
    </div>
  );
}

export default App;

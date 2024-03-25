import "./App.css";
// import { Main } from "./components/pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { PokemonItem } from "./components/pages/PokemonItem/PokemonItem";
import { FavoritePokemons } from "./components/pages/FavoritePokemons/FavoritePokemons";
import React, { Suspense } from "react";

const Main = React.lazy(() => import('./components/pages/Main/Main'));

function App() {
  return (
    <div className="App">
      <div className="App">
        <Suspense fallback={<h1>Loading!</h1>}>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/favorites" element={<FavoritePokemons/>} />
            <Route path="/:pokemonId" element={<PokemonItem />} />
          </Route>
        </Routes>
     </Suspense>
      </div>
    </div>
  );
}

export default App;

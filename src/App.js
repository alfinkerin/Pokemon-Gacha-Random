import React from "react";
import Pokedex from "./pokedex";
import Pokegame from "./pokegame";

function App() {
  return (
    <div className="App">
      <h1>Note:</h1>
      <h3>Klik refresh pada browser untuk mendapatkan pokemon secara acak!</h3>
      <Pokegame />
    </div>
  );
}

export default App;

import React from "react";
import Pokecard from "./pokecard";
import "./pokedex.css";

function Pokedex(props) {
  const pokemon = [
    { id: 4, name: "charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flyinhg", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "nomral", base_experience: 65 },
  ];
  return (
    <div>
      <h1>Pokedex</h1>
      <p>Total experience: {props.exp}</p>
      <p>{props.isWinner ? "WINNER!" : "LOSSER!"}</p>
      <div className="pokedex-card">
        {props.pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;

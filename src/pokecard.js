import React from "react";
import "./pokecard.css";

function Pokecard(props) {
  const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  let padToThree = (number) =>
    number <= 999 ? `00${number}`.slice(-3) : number;
  let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;
  return (
    <div className="Pokecard">
      <h1>{props.name}</h1>
      <img src={imgSrc} />
      <div>Type:{props.type}</div>
      <div>Exp:{props.exp}</div>
    </div>
  );
}

export default Pokecard;

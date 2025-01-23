import React from "react";

const PokemonInfo = ({ pokemonData }) => {
  if (!pokemonData) {
    return null;
  }

  const { name, id, weight, height, types, stats, sprite } = pokemonData;

  return (
    <div className="output-container">
      <div>
        <span id="pokemon-name" className="name">
          {name.toUpperCase()}
        </span>
        <span id="pokemon-id" className="id">
          #{id}
        </span>
      </div>
      <div>
        <span id="weight">Weight: {weight} </span>
        <span id="height">Height: {height}</span>
      </div>
      <div id="img-container">
        <img src={sprite} alt={name} className="pokemon-image" />
      </div>
      <div id="types" className="type">
        Type: {types.join(" + ")}
      </div>
      <table>
        <tr>
          <td>HP:</td>
          <td id="hp">{stats.hp}</td>
        </tr>
        <tr>
          <td>Attack:</td>
          <td id="attack">{stats.attack}</td>
        </tr>
        <tr>
          <td>Defense:</td>
          <td id="defense">{stats.defense}</td>
        </tr>
        <tr>
          <td>Sp. Attack:</td>
          <td id="special-attack">{stats.specialAttack}</td>
        </tr>
        <tr>
          <td>Sp. Defense:</td>
          <td id="special-defense">{stats.specialDefense}</td>
        </tr>
        <tr>
          <td>Speed:</td>
          <td id="speed">{stats.speed}</td>
        </tr>
      </table>
    </div>
  );
};

export default PokemonInfo;

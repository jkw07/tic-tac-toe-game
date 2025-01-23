import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleInputChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(pokemonName);
  };

  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <label htmlFor="search-input">Pokemon Name or ID:</label>
      <input
        type="text"
        id="search-input"
        name="pokemon"
        value={pokemonName}
        onChange={handleInputChange}
        required
      />
      <button id="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

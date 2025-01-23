import React, { useState } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import PokemonInfo from "./components/PokemonInfo";
import Footer from "./components/Footer";

const App = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const formatInput = (input) => {
    let formattedInput = input
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-\u2640\u2642]/g, "");
    if (formattedInput.includes("\u2640")) {
      formattedInput = formattedInput.replace(/\u2640/g, "-f");
    }
    if (formattedInput.includes("\u2642")) {
      formattedInput = formattedInput.replace(/\u2642/g, "-m");
    }
    return formattedInput;
  };

  const searchPokemon = async (pokemonNameOrId) => {
    try {
      const formattedInput = formatInput(pokemonNameOrId);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${formattedInput}`
      );
      const data = await response.json();

      const pokemonInfo = {
        name: data.name,
        id: data.id,
        weight: data.weight,
        height: data.height,
        types: data.types.map((type) => type.type.name),
        sprite: data.sprites.front_default,
        stats: {
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        },
      };
      setPokemonData(pokemonInfo);
    } catch (error) {
      alert("Pokemon not found");
      console.error(`Pokemon not found: ${error}`);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="data-container">
          <SearchForm onSearch={searchPokemon} />
          <PokemonInfo pokemonData={pokemonData} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

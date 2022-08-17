import { useEffect, useState } from "react";
import PokemonCard from "./Components/PokemonCard";
import axios from "axios";
// import SearchBar from "./Components/SearchBar";

function App() {
  // const [searchedPokemon, setSearchedPokemon] = useState("");
  const [textInput, setTextInput] = useState("");
  const [pokemonData, setPokemonData] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const searchedPokemon = textInput;
    const url = `https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`;
    await axios.get(url).then((res) => {
      setPokemonData(res.data);
    });
  }

  return (
    <div>
      <h1 class="mainHeadings">Poke-tracker</h1>
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <label>Enter Pokémon</label>
          <input
            type="text"
            required
            value={textInput}
            onChange={(e) => setTextInput(e.target.value.toLowerCase())}
          />
          <button>Search Pokémon </button>
        </form>
      </div>
      {pokemonData && <PokemonCard pokemonData={pokemonData} />}
    </div>
  );
}

export default App;

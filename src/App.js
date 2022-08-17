import "./App.css";
import { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState("");

  async function getPokemon() {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await fetch(url);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  function handleChange(e) {
    setPokemon(e.target.value.toLowerCase());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await getPokemon();
  }

  return (
    <div>
      <h1>Poke-tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokemon name"
          />
        </label>
      </form>
      <div>
        <p>
          Data:
          {pokemonData}
        </p>
      </div>
    </div>
  );
}

export default App;

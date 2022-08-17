import React, { useEffect, useState } from "react";

export default function PokemonCard({ pokemonData }) {
  return (
    <div class="pokemonCard">
      <img
        alt="Default in-game Pokémon sprite"
        src={pokemonData.sprites.front_default}
      ></img>
      <img
        alt="Shiny in-game Pokémon sprite"
        src={pokemonData.sprites.front_shiny}
      ></img>
      {pokemonData.sprites.front_female && (
        <img
          alt="Default in-game female Pokémon sprite"
          src={pokemonData.sprites.front_female}
        ></img>
      )}
      {pokemonData.sprites.front_shiny_female && (
        <img
          alt="Default in-game female Pokémon sprite"
          src={pokemonData.sprites.front_shiny_female}
        ></img>
      )}
      <p> Name: {pokemonData.name} </p>
      <p> National Pokédex number: {pokemonData.id}</p>
      <p>Type: {pokemonData.types[0].type.name}</p>
      {pokemonData.types[1] && <p> {pokemonData.types[1].type.name}</p>}
    </div>
  );
}

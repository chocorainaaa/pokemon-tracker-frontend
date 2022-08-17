import React, { useEffect, useState } from "react";

export default function PokemonCard({ pokemonData }) {
  console.log(pokemonData);
  // name: null,
  // sprite: null,
  // shinySprite: null,
  // nationalDex: null,
  // type1: null,
  // type2: null,
  // ability: null,
  // hiddenAbility: null,
  // baseStats: null,

  if (pokemonData) {
    return (
      <div>
        <h2>Name: {pokemonData.species?.name} </h2>
      </div>
    );
  }
}

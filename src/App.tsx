import React, { useEffect, useState } from 'react';
import { Pokemon, PokemonSearchResult } from './types/PokemonTypes';
import PokedexTable from './components/PokedexTable';
import { getManyPokemon } from './services/PokemonService';


// const pikachuBigDog: Pokemon = {
//   id: 1234,
//   name: "Pikachu",
//   sprite: {front_default: "ashdjksadh"},
//   types: [{name: "electric"}],

// }

// const charizardBigDog: Pokemon = {
//   id: 5678,
//   name: "Charizard",
//   sprite: {front_default: "ashdjksadh"},
//   types: [{name: "fire"}],

// }


// const pokemonArray: Pokemon[] = [
//   {
//     id: 1212,
//     name: "Dick",
//   sprite: {front_default: "asdhjkld"},
//   types: [{name: "fire"}]
//   },
//   {
//     id: 2323,
//     name: "Harry",
//     sprite: {front_default: "asdghj"},
//     types: [{name: "water"}, {name: "flying"}]
//   },
//   {
//     id: 7890,
//     name: "Bob",
//     sprite: {front_default: "asdghj"},
//     types: [{name: "water"}, {name: "flying"}]
//   }
// ]





function App() {
  const [pokemonArray, setPokemonArray] = useState<PokemonSearchResult[]>([])



  const getPokemon = async () => {
    try {
      const result = await getManyPokemon()
      setPokemonArray(result)

    } catch (error) {
      throw error
    }
  }

  getPokemon()

  return (
    <div className="App">
      <PokedexTable pokemons={pokemonArray} />
    </div>
  );
}

export default App;

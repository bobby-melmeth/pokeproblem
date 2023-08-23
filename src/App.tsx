import React from 'react';
import { Pokemon } from './types/PokemonTypes';
import PokedexTable from './components/PokedexTable';


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


const pokemonArray: Pokemon[] = [
  {
    id: 1212,
    name: "Dick",
  sprite: {front_default: "asdhjkld"},
  types: [{name: "fire"}]
  },
  {
    id: 2323,
    name: "Harry",
    sprite: {front_default: "asdghj"},
    types: [{name: "water"}, {name: "flying"}]
  },
  {
    id: 7890,
    name: "Bob",
    sprite: {front_default: "asdghj"},
    types: [{name: "water"}, {name: "flying"}]
  }
]





function App() {
  return (
    <div className="App">
      <PokedexTable pokemons={pokemonArray}/>
    </div>
  );
}

export default App;

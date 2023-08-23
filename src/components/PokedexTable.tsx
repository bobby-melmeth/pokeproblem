import React from 'react'
import { Pokemon } from '../types/PokemonTypes'

type Props = {
    pokemons: Pokemon[],
}

const PokedexTable = ({pokemons}: Props) => {

    const renderPokemon = () => {
        return pokemons.map((pokemon) => {
            return (
                <div>
                    <div>{pokemon.name}</div>
                <div>{pokemon.sprite.front_default}</div>
                <div>{pokemon.types.map((type) => type.name)}</div>
                </div>

            )
        })
    }

    return (
        <div>
            {renderPokemon()}
        </div>

    )
}

export default PokedexTable
import React from 'react'
import { PokemonSearchResult } from '../types/PokemonTypes'

type Props = {
    pokemons: PokemonSearchResult[],
}

const PokedexTable = ({pokemons}: Props) => {

    const renderPokemon = () => {
        return pokemons.map((pokemon) => {
            return (
                <div>
                    <div>{pokemon.name}</div>
                    <div>{pokemon.url}</div>
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
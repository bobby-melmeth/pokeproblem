import React from "react"
export type Pokemon = {
    id: number
    name: string
    types: PokemonType[]
    sprite: PokemonSprite

}

export type PokemonType = {
    name: "fire" | 'electric' | 'flying' | 'water'
}

export type PokemonSprite = {
    front_default: string
}

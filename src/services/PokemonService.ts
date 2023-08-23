import axios from "axios"
import { PokemonSearchResult } from "../types/PokemonTypes"

export const getManyPokemon = async (): Promise<PokemonSearchResult[]> => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0`)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}


export const deletePokemon = async (limit: number): Promise<boolean> => {
    try {
        await axios.delete(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`)

        return true
    } catch (error) {

        throw false
    }
}

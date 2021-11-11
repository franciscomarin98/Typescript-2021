import axios from 'axios';
import {PokemonResponse} from "../interfaces";

export const getPokemon = async (pokemonId: number): Promise<PokemonResponse> => {
    const response = await axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.data;
}
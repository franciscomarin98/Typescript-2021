/*
import {getPokemon} from "./generics/get-pokemon";


getPokemon(4)
    .then(data => console.log(data.name))
    .catch(error => console.log(error))
    .finally(() => console.log(('Fin de getPokemon')))*/

//Los decoradores no es mas que una funcion que se va a ejecutar en momento de transpilación o compilación de código

import {PokemonClass} from "./decorators/pokemon-class";

const charmander = new PokemonClass('Charmander');
(PokemonClass.prototype as any).customName = 'Pikachu';
import {getPokemon} from "./generics/get-pokemon";


getPokemon(4)
    .then(data => console.log(data.name))
    .catch(error => console.log(error))
    .finally(() => console.log(('Fin de getPokemon')))
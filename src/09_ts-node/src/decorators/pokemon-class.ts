function printToConsole(constructor: Function) {
    console.log(constructor);
}

@printToConsole
export class PokemonClass {
    public baseUrl: string = 'https://pokeapi.co';

    constructor(
        public name: string,
    ) {

    }
}

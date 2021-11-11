function printToConsole(constructor: Function) {
    console.log(constructor);
}


//Los Decorator Factories deben retornar una función para ser considerados como tal.
const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => {
            console.log('No imprimir')
        }
    }
}

const blockPrototype = function (constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

@blockPrototype
@printToConsoleConditional(true)
export class PokemonClass {
    public baseUrl: string = 'https://pokeapi.co';

    constructor(
        public name: string,
    ) {

    }
}

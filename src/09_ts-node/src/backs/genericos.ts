// import {Hero} from "./classes/Hero";
// import {Hero as SuperHero} from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";
// import powers2 from "./data/powers";
//
// const hero = new HeroClasses.Hero('Ironman', 1, 55);
// console.log(hero);
// console.log(powers2);
//

// import {genericFunction, genericFunctionArrow} from "./generics/generic";
//
// const valor = 'Hola Mundo';
// console.log(genericFunction(valor).toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());

import {genericFunctionArrow} from '../generics/generic';
import {Villian, Hero} from "../interfaces";

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool))
console.log(genericFunctionArrow<Villian>(deadpool))
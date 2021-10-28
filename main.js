"use strict";
(function () {
    var msg = 'Hola mundo desde Typescript';
    console.log(msg);
})();
(function () {
    var avenger;
    var exists = "hola";
    var power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 150.23234234;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7];
    console.log(numbers);
    var villians = ['Thanos', 'SandMan', 'Venom', 'Green Globin'];
    villians.forEach(function (villian) { return (console.log(villian.toUpperCase())); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log({ isBatman: isBatman }, { isSuperman: isSuperman });
})();
(function () {
    var EnglishLevel;
    (function (EnglishLevel) {
        EnglishLevel[EnglishLevel["basic"] = 0] = "basic";
        EnglishLevel[EnglishLevel["medium"] = 5] = "medium";
        EnglishLevel[EnglishLevel["max"] = 10] = "max";
    })(EnglishLevel || (EnglishLevel = {}));
    var currentLevel = EnglishLevel.medium;
    console.log(EnglishLevel);
    console.log(currentLevel);
})();
(function () {
    console.log('Fin');
})();
(function () {
})();
(function () {
    var avenger = 10;
    console.log(avenger);
    var villians = 20;
    if (avenger < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avenger = 123;
    console.log({ avenger: avenger });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = "Linterna Verde";
    var volcanNegro = "Heroe: Volcan Negro";
    console.log(batman.toUpperCase());
    console.log("I'm " + linternaVerde);
    console.log(((_a = volcanNegro[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No existe');
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var PowerLevel;
    (function (PowerLevel) {
        PowerLevel[PowerLevel["aquaman"] = 0] = "aquaman";
        PowerLevel[PowerLevel["batman"] = 1] = "batman";
        PowerLevel[PowerLevel["superman"] = 100] = "superman";
        PowerLevel[PowerLevel["flash"] = 5] = "flash";
    })(PowerLevel || (PowerLevel = {}));
    var fuerzaFlash = PowerLevel.flash;
    var fuerzaSuperman = PowerLevel.superman;
    var fuerzaBatman = PowerLevel.batman;
    var fuerzaAcuaman = PowerLevel.aquaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var hero = ['Dr Strange', 100, false];
    hero[1] = 1000;
    console.log(hero);
})();
(function () {
    function callBatman() {
        console.log('Batiseñal activada');
    }
    var callSuperman = function () {
        return;
    };
    callBatman();
    callSuperman();
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return firstName + " " + restArgs.join(' ');
    };
    var francisco = fullName('Francisco', 'Joel', 'Marin', 'Calderon');
    console.log({ francisco: francisco });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'No lastName');
    };
    var noName;
    var name = fullName('Tony');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName, upperCase) {
        if (upperCase === void 0) { upperCase = false; }
        if (upperCase) {
            return (firstName + " " + (lastName || 'No lastName')).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || 'No lastName');
        }
    };
    var name = fullName('Tony', '', true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var noName;
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatiSignal = function () {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatiSignal);
    var heroName = activateBatiSignal();
})();
(function () {
    function sumar(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    var unirHeroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    var noHaceNada = function (numero, text, booleano, arreglo) {
    };
    var noHaceNadaTampoco;
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "hola " + name; };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado"; };
    var myFunction;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Francisco'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var superman = {
        name: 'Venom',
        age: 60,
        powers: ['Simbionte'],
        getNombre: function () {
            return this.name;
        }
    };
    var batman = {
        name: 'Batman',
        age: 23,
        powers: ['Oscuridad'],
    };
    console.log({ batman: batman, superman: superman });
    var customVariable = 'FrancisCode';
    console.log(typeof customVariable);
})();
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
    console.log({ mystique: mystique });
    console.log({ batimovil: batimovil });
    console.log({ bumblebee: bumblebee });
    console.log({ mystique: mystique });
    console.log({ villanos: villanos });
})();
//# sourceMappingURL=main.js.map
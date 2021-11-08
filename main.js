"use strict";
(function () {
    var batman = {
        name: 'Batman',
        age: 23,
        powers: ['Oscuridad'],
    };
})();
(function () {
    var client = {
        name: 'Francisco',
        age: 20,
        address: {
            id: 123,
            city: 'Calceta',
            zipcode: 'ABC-123'
        },
        getFullAddress: function (id) {
            return this.address.city;
        }
    };
})();
(function () {
    var Mutant = (function () {
        function Mutant() {
            this.name = 'Wolverine';
            this.realName = 'Logan';
            this.age = 50;
        }
        Mutant.prototype.mutantPower = function (id) {
            return this.name + " - " + this.realName;
        };
        return Mutant;
    }());
    var test = new Mutant();
    console.log(test.mutantPower(5));
})();
(function () {
    var conducirBatimovil = function (auto) {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    var batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar: function () {
            console.log("...... gogogo!!!");
        }
    };
    var guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    var reir = function (guason) {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    var ciudadGotica = function (ciudadanos) {
        return ciudadanos.length;
    };
    var Persona = (function () {
        function Persona() {
            this.edad = 22;
            this.estadoCivil = 'Soltero';
            this.nombre = 'Francisco';
            this.sexo = 'F';
        }
        Persona.prototype.imprimirBio = function () {
            console.log('Hola');
        };
        return Persona;
    }());
})();
//# sourceMappingURL=main.js.map
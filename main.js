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
//# sourceMappingURL=main.js.map
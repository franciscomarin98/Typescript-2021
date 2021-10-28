"use strict";
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
})();

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
//# sourceMappingURL=main.js.map
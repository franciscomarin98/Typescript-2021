"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = function (text) {
        return (text.trim().length > 3);
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Fra'));
//# sourceMappingURL=main.js.map
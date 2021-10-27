"use strict";
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

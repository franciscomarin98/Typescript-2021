"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    var noName;
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();

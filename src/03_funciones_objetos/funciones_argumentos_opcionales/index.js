"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'No lastName');
    };
    var noName;
    var name = fullName('Tony');
    console.log({ name: name });
})();

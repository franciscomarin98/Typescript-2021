"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function () {
    var a = 'FrancisCode';
    var getName = function () {
        console.log('getName');
    };
    getName();
    console.log({ a: a });
    var avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bethany',
        activo: true,
        poder: 1500
    };
    var printAvengers = function (_a) {
        var ironman = _a.ironman, resto = __rest(_a, ["ironman"]);
        console.log(ironman.toUpperCase(), resto);
    };
    printAvengers(avengers);
    var avengerArray = ['Cap. America', 'Ironman', 'Hulk'];
    var aplasta = avengerArray[2];
    console.log(aplasta);
})();
//# sourceMappingURL=main.js.map
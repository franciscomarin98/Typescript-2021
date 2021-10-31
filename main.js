"use strict";
(function () {
    var Avenger = (function () {
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.prototype.bio = function () {
            return this.name + " (" + this.team + ")";
        };
        Avenger.avengerAge = function () {
            return this.age;
        };
        Avenger.age = 35;
        return Avenger;
    }());
    var antMan = new Avenger('AntMan', 'Team Cap', 'Scott Lang');
    console.log(antMan);
    console.log(antMan.bio());
    console.log(Avenger.avengerAge());
})();
//# sourceMappingURL=main.js.map
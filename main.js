"use strict";
(function () {
    var Avenger = (function () {
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.age = 35;
        return Avenger;
    }());
    var antMan = new Avenger('AntMan', 'Team Cap', 'Scott Lang');
    console.log(antMan);
})();
//# sourceMappingURL=main.js.map
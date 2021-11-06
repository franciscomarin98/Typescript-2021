"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
})();
(function () {
    var Avenger = (function () {
        function Avenger(_name, _realName) {
            this._name = _name;
            this._realName = _realName;
            console.log('Constructor avenger called');
        }
        Object.defineProperty(Avenger.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                if (value.length < 3) {
                    throw new Error('El nombre debe de contener minimo 3 letras');
                }
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Avenger.prototype, "realName", {
            get: function () {
                return this._realName;
            },
            set: function (value) {
                this._realName = value;
            },
            enumerable: false,
            configurable: true
        });
        Avenger.prototype.fullName = function () {
            return this._name + " " + this._realName;
        };
        return Avenger;
    }());
    var Xmen = (function (_super) {
        __extends(Xmen, _super);
        function Xmen(name, realName, isMutant) {
            var _this = _super.call(this, name, realName) || this;
            _this.isMutant = isMutant;
            return _this;
        }
        return Xmen;
    }(Avenger));
    var wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine._name = 'Wolverine II';
})();
(function () {
    var Mutante = (function () {
        function Mutante(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        return Mutante;
    }());
    var Xmen = (function (_super) {
        __extends(Xmen, _super);
        function Xmen() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Xmen.prototype.salvarMundo = function () {
            return 'Mundo a salvo!';
        };
        return Xmen;
    }(Mutante));
    var Villian = (function (_super) {
        __extends(Villian, _super);
        function Villian() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Villian.prototype.conquistarMundo = function () {
            return 'Mundo conquistado';
        };
        return Villian;
    }(Mutante));
    var wolverine = new Xmen('Wolverine', 'Logan');
    var magneto = new Villian('Magneto', 'Magnus');
    var printName = function (character) {
        console.log(character.name);
    };
})();
(function () {
    var Apocalipsis = (function () {
        function Apocalipsis(name) {
            this.name = name;
        }
        Apocalipsis.callApocalipsis = function () {
            if (!Apocalipsis._instance) {
                Apocalipsis._instance = new Apocalipsis('Soy único');
            }
            return Apocalipsis._instance;
        };
        return Apocalipsis;
    }());
    var apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
})();
//# sourceMappingURL=main.js.map
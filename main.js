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
    console.log(antMan);
    console.log(antMan.bio());
    console.log(Avenger.avengerAge());
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
            console.log('Constructor x-men called');
            return _this;
        }
        return Xmen;
    }(Avenger));
    var wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine._name = 'Wolverine II';
})();
//# sourceMappingURL=main.js.map
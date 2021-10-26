(function () {
    var EnglishLevel;
    (function (EnglishLevel) {
        EnglishLevel[EnglishLevel["basic"] = 0] = "basic";
        EnglishLevel[EnglishLevel["medium"] = 5] = "medium";
        EnglishLevel[EnglishLevel["max"] = 10] = "max";
    })(EnglishLevel || (EnglishLevel = {}));
    var currentLevel = EnglishLevel.medium;
    console.log(EnglishLevel);
    console.log(currentLevel);
})();

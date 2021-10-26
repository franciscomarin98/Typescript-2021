(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var PowerLevel;
    (function (PowerLevel) {
        PowerLevel[PowerLevel["aquaman"] = 0] = "aquaman";
        PowerLevel[PowerLevel["batman"] = 1] = "batman";
        PowerLevel[PowerLevel["superman"] = 100] = "superman";
        PowerLevel[PowerLevel["flash"] = 5] = "flash";
    })(PowerLevel || (PowerLevel = {}));
    var fuerzaFlash = PowerLevel.flash;
    var fuerzaSuperman = PowerLevel.superman;
    var fuerzaBatman = PowerLevel.batman;
    var fuerzaAcuaman = PowerLevel.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();

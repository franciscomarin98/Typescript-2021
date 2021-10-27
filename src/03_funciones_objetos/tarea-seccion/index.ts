(() => {

    function sumar(a: number, b: number): number {
        return a + b;
    }

    const contar = (heroes: string[]): number => {
        return heroes.length;
    }

    const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);

    const llamarBatman = (llamar: boolean = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    }

    llamarBatman();

    const unirHeroes = (...personas: string[]): string => {
        return personas.join(", ");
    }

    const noHaceNada = (numero: number, text: string, booleano: boolean, arreglo: any[]): void => {
    }

    let noHaceNadaTampoco: (numero: number, text: string, booleano: boolean, arreglo: any[]) => void;

})();
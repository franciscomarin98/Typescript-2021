(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getNombre?: () => string
    }

    let superman: Hero = {
        name: 'Venom',
        age: 60,
        powers: ['Simbionte'],
        getNombre() {
            return this.name;
        }
    }

    let batman: Hero = {
        name: 'Batman',
        age: 23,
        powers: ['Oscuridad'],
    }

    console.log({batman, superman});

    let customVariable: (string | number | Hero) = 'FrancisCode';
    console.log(typeof  customVariable);

})();
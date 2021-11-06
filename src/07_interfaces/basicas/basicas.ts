(() => {

    interface Hero {
        name: string,
        age?: number,
        powers: string[],
        getNombre?: () => string
    }

    let batman: Hero = {
        name: 'Batman',
        age: 23,
        powers: ['Oscuridad'],
    }

})();
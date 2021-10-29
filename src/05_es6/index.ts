(() => {

    // var x = 0;    NO USAR

    let a = 'FrancisCode';

    const getName = () => {
        console.log('getName');
    }

    getName();
    console.log({a});

    type Avenger = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bethany',
        activo: true,
        poder: 1500
    }

    const printAvengers = ({ironman, ...resto}: Avenger) => {
        console.log(ironman.toUpperCase(), resto);
    }

    printAvengers(avengers);

    const avengerArray = ['Cap. America', 'Ironman', 'Hulk'];
    const [, , aplasta] = avengerArray;
    console.log(aplasta);

})();
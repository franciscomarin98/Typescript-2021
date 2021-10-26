(() => {

    let avenger: number = 10;
    console.log(avenger);

    const villians: number = 20;

    if (avenger < villians) {
        console.log('Estamos en problemas');
    } else {
        console.log('Estamos salvados');
    }

    // NaN es considerado un numero
    avenger = 123;
    console.log({avenger})

})();
(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;

    // let myFunction: (y:number, z:number) => number;
    // let myFunction: (y:string) => string;
    // let myFunction: () => void;
    let myFunction: Function;

    // myFunction = 10;
    // console.log(myFunction);


    myFunction = addNumbers;
    console.log(myFunction(1,2));


    myFunction = greet;
    console.log(myFunction('Francisco'));

    myFunction = saveTheWorld;
    console.log(myFunction());


})();
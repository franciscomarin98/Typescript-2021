(() => {

   const batman:string = 'Batman';
   // const batman = 'Bat\'man';

   const linternaVerde:string = "Linterna Verde";
   // const linternaVerde = "Linterna's Verde"

   const volcanNegro:string = `Heroe: Volcan Negro`;

   console.log(batman.toUpperCase());
   console.log(`I'm ${linternaVerde}`);

   console.log(volcanNegro[10]?.toUpperCase() || 'No existe')


})();
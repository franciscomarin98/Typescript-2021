(() => {

    class Apocalipsis {

        static _instance: Apocalipsis;

        private constructor(public name: string) {
        }

        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis._instance){
                Apocalipsis._instance = new Apocalipsis('Soy único');
            }

            return  Apocalipsis._instance;
        }
    }


    const apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);

})();
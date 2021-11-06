(() => {

    interface Xmen {
        name: string,
        realName: string,

        mutantPower(id: number): string
    }

    interface Human {
        age: number
    }


    class Mutant implements Xmen, Human {
        public name: string = 'Wolverine';
        public realName: string = 'Logan';
        public age: number = 50;

        mutantPower(id: number): string {
            return `${this.name} - ${this.realName}`;
        }
    }

    const test = new Mutant();
    console.log(test.mutantPower(5));
    
})();
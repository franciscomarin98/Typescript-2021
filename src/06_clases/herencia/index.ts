(() => {

    class Avenger {
        constructor(
            public _name: string,
            public _realName: string
        ) {
            console.log('Constructor avenger called')
        }


        get name(): string {
            return this._name;
        }

        set name(value: string) {
            if (value.length < 3) {
                throw new Error('El nombre debe de contener minimo 3 letras');
            }
            this._name = value;
        }

        get realName(): string {
            return this._realName;
        }

        set realName(value: string) {
            this._realName = value;
        }

        private fullName(): string {
            return `${this._name} ${this._realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName);
            // console.log('Constructor x-men called')
        }

        /*        getFullNameDesdeXmen() {
                    console.log(super.getFullName());
                }*/
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)
    wolverine._name = 'Wolverine II';

})();
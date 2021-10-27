(() => {

    const fullName = (firstName: string, lastName?: string, upperCase: boolean = false): string => {
        if (upperCase) {
            return `${firstName} ${lastName || 'No lastName'}`.toUpperCase();
        }else{
            return `${firstName} ${lastName || 'No lastName'}`;
        }
    }

    const name = fullName('Tony', '', true);
    console.log({name})

})();
(() => {

    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'No lastName'}`;
    }

    let noName: string;

    const name = fullName('Tony');
    console.log({name})

})();
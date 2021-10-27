(() => {

    const fullName = (firstName: string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const francisco = fullName('Francisco', 'Joel', 'Marin', 'Calderon');

    console.log({francisco});

})();
(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;

        getFullAddress(id: string): string;
    }

    interface Address {
        id: number,
        zipcode?: string;
        city: string;
    }

    const client: Client = {
        name: 'Francisco',
        age: 20,
        address: {
            id: 123,
            city: 'Calceta',
            zipcode: 'ABC-123'
        },
        getFullAddress(id: string): string {
            return this.address.city;
        }
    }

})();
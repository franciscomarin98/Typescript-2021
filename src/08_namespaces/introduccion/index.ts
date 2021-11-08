namespace Validations {
    export const validateText = (text: string): boolean => {
        return (text.trim().length > 3);
    }
}

console.log(Validations.validateText('Fra'));
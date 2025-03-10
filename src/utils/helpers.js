const characterLimit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberLimit = "123456789";

export const generateRandomString = (limit, scope) => {
    let stringChars = ""
    let response = "";

    switch (scope) {
        case 'number':
            stringChars = numberLimit; // Length 9
            break;
        case 'all':
            stringChars = `${numberLimit}${characterLimit}`; // Length 35
            break;
        case 'characters':
            stringChars = characterLimit; // Length 26
            break;
    
        default:
            stringChars = `${numberLimit}${characterLimit}`;
            break;
    }

    for (let index = 0; index < limit; index++) {
        const randomIndex = Math.floor(Math.random() * stringChars.length); // random index
        const randomChar = stringChars[randomIndex];
        response = response + randomChar; // "O" + "RJ" = "ORJ"
    }

    return response;
}
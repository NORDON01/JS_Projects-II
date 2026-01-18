const log = console.log;
export const random = 'random value'; /* named export  */

//Un fichier de données
export const people = [
    {fname:"John", job:"developer"},
    {fname:"Susan", job:"designer"},
    {fname:"Anna", job:"the boss"}
]

//Sélection d'éléments depuis le HTML
export function getElement(selection){
    const element = document.querySelector(selection);
    if(element) {
        return element;
    }
    else {
        throw Error('You did not select element');
    }
}
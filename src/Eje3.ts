console.log('Ejercicio 3');

export interface Persona {
    fritsName: string;
    lastName?: string;
}

let Person: Persona = {
    fritsName: 'Lionel',
    lastName: 'Messi'
}

console.log('Hola soy ' + Person.fritsName + ' ' + Person.lastName);
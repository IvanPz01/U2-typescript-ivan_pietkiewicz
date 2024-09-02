console.log('Ejercicio 14');

// No funciona la conversión de tipos
let valor: any = 10;

let stringValue: string = valor as string;

console.log(`El valor es: ${stringValue.length}`);



// Solución con toString()


let valor2: any = 10;

let stringValue2: string = valor2.toString();

console.log(`El valor es: ${stringValue2.length}`);
function idnetnity<T>(valor: T): T {
    return valor;
}

let Manolo = idnetnity<string>('Jorge');

let Manolo2 = idnetnity<number>(10);

console.log(Manolo, Manolo2);
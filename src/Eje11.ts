console.log('Ejercicio 11');

interface Shape {
    area(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const circle = new Circle(5);
console.log(`El area es ${circle.area()}`);
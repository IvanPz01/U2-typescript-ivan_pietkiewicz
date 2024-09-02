console.log('Ejercicio 7');

class Car {
    private make: string;

    constructor(make: string) {
        this.make = make;
    }

    drive() {
        console.log(`Driving a ${this.make}`);
    }

    getMake() {
        return this.make;
    }
}

export default Car;
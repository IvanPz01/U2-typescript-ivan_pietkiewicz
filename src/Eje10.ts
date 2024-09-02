console.log('Ejercicio 10');

import Car from "./Eje7";

class ElectricCar extends Car {
    batteryLife:number;

    constructor(make:string, batteryLife:number){
    super(make);
    this.batteryLife = batteryLife;
    }

    charge(){
        console.log(`${this.getMake()} Charging... ${this.batteryLife}%`);
    }
}

let MyElectricCar = new ElectricCar('Tesla', 100);
MyElectricCar.charge();
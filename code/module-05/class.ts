interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: 'left' | 'right'): string;
}


export class Car implements Vehicle { 
  //properties
  private static numberOfCars: number = 0;  // New static property
  private _make: string;
  private _color: string;
  private _doors: number;
  
  //constructor 
  constructor( make: string, color: string, doors = 4) { 
    this._make = make;
    this._color = color;
    if ((doors % 2) === 0) {
      this._doors = doors;
    } else {
        throw new Error('Doors must be an even number');
    }
    Car.numberOfCars++;  // Increment the number of cars
  }

  get make(): string {
    return this._make;
  }

  set make(make) { 
    this._make = make;
  }

  get color() {
    return 'The color of the car is ' + this._color;
  }

  set color(color) {
      this._color = color;
  }

  get doors(): number {
    return this._doors;
  }

  set doors(doors) {
    if (doors % 2 === 0 ) { 
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
  }

    // Methods

  public static getNumberOfCars(): number {
    console.log('There have been ' + Car.numberOfCars + ' cars created.');
      return Car.numberOfCars;
  }

  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
  }

  brake(): string {
    console.log(this.worker());
    return `${this.worker()} is braking with the standard braking system.`
  }

  turn(direction: 'left' | 'right'): string {
    console.log(this.worker());
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  protected worker(): string {
    return this._make;
  }

}

// let myCar1 = new Car('Cool Car Company', 'blue', 2);  // Instantiates the Car object with all parameters

// console.log(myCar1.color);
// console.log(myCar1._color);

// console.log(myCar1.accelerate(35));
// console.log(myCar1.brake());
// console.log(myCar1.turn('right'));

// let myCar2 = new Car('Galaxy Motors', 'red', 2);

// console.log(myCar2.color);

// let myCar3 = new Car('Galaxy Motors', 'gray', 4);
// console.log(myCar3.doors);  // returns 4, the default value


let myCar1 = new Car('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2
console.log(Car.getNumberOfCars());


class ElectricCar extends Car {
  // Properties unique to ElectricCar
  private _range: number;
  // Constructor
  constructor(make: string, color: string, range: number, doors = 4) { 
    super(make, color, doors)
    this._range = range;
  }

    // Accessors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }

  // Methods
  charge() {
    console.log(this.worker() + " is charging.")
  }

  // Overrides the brake method of the Car class
  brake(): string {
    console.log( `${this.worker()} is braking with the regenerative braking system.`);
    return '';
  }

}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge(); 
console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"
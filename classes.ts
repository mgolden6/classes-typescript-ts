class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('honk honk');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('chugga chugga');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
    console.log(this.color);
    console.log(this.wheels);
  }
}

const car = new Car(4, 'black');
car.startDrivingProcess();

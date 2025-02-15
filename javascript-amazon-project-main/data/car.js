class Car {
  #brand;
  #model;
  speed;
  isTrunkOpen;

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
    this.speed = 0;
    this.isTrunkOpen = false;
  }

  displayInfo(){
    console.log(`${this.#brand} ${this.#model} ${this.speed}`);
  }

  go() {
    if(this.speed >= 200 || this.isTrunkOpen){
      return;
    }
    this.speed += 5;
  }

  break() {
    if(this.speed <= 0){
      return;
    }
    this.speed -= 5;
  }

  openTrunk(){
    this.isTrunkOpen = true;
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(brand, model, acceleration) {
    super(brand, model);
    this.acceleration = acceleration;
    this.isTrunkOpen = undefined;
  }

  go(acceleration){
    if(this.speed >= 300){
      return;
    }
    this.speed += acceleration;
  }

  openTrunk() {}
  closeTrunk() {}
}

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', 'Model 3');

const raceCar = new RaceCar('McLaren', 'F1', 20);

console.log(raceCar);
raceCar.go(200);
raceCar.displayInfo();


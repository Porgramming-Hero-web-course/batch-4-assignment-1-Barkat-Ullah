class Car {
  constructor(public make: string, public model: string, public year: number) {}
  getCarAge() {
    const year = new Date().getFullYear();
    const currentYear = year - this.year;
    return currentYear;
  }
}

const car = new Car("Honda", "Civic", 2015);
// console.log(car.getCarAge());

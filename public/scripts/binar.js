function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Binar {
  static populateNewCars = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
      
      const typeDriver = Math.random() < 0.5 ? "driver-true" : "driver-false";

      return {
        ...car,
        availableAt,
        typeDriver
      };
    })
  }

  static populateCars = (cars) => {
    return cars.map((car) => {
      const availableAt = new Date(car.availableAt)

      return {
        ...car,
        availableAt
      };
    })
  }

  static async listCars(filterer) {
    let cars;
    let cachedCarsString = localStorage.getItem("CARS");

    if (!!cachedCarsString) {
      const cacheCars = JSON.parse(cachedCarsString);
      cars = this.populateCars(cacheCars);
      
    } else {
      const response = await fetch(
        "../data/cars.min.json"
      );
      console.log("there is no a chached")
      const body = await response.json();
      cars = this.populateNewCars(body)
      localStorage.setItem("CARS", JSON.stringify(cars));
    }

    if (filterer instanceof Function) return cars.filter(filterer);
    
    return cars;
  }
}

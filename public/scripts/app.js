class App {
  constructor() {
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    // Register click listener
    this.loadButton.addEventListener("click", this.run);
  }

  async init() {
    // Don't invoke this.load() here, it will be triggered on button click
  }

  run = async () => {
    this.driverTypeSelect = document.getElementById("driver-type");
    this.dateInput = document.getElementById("date-input");
    this.pickupTimeSelect = document.getElementById("pickup-time");
    this.passengerCountInput = document.getElementById("passenger-count");

    const driverType = this.driverTypeSelect.value;
    const date = this.dateInput.value;
    const pickupTime = this.pickupTimeSelect.value;
    let passengerCount = this.passengerCountInput.value;

    if (passengerCount === "") passengerCount = 0;
    
    if (driverType === "driver-true") passengerCount++;

    // Show the container
    this.carContainerElement.classList.remove("hidden");

    // Clear the container before loading new cars
    this.carContainerElement.innerHTML = "";

    await this.load(date,pickupTime,passengerCount);

    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load(date,pickupTime,passengerCount) {
    const dateTime = new Date(`${date}T${pickupTime}`);
    const cars = await Binar.listCars(car =>
      car.available &&
      car.availableAt > dateTime &&
      car.capacity >= passengerCount
    );
    Car.init(cars);
  }
}

const app = new App();
// app.init();

function checkFields() {
  const driverType = document.getElementById("driver-type").value;
  const date = document.getElementById("date-input").value;
  const pickupTime = document.getElementById("pickup-time").value;
  
  this.loadButton = document.getElementById("load-btn");
  
  // If any of the mandatory fields are empty, disable the button
  if (driverType === "" || date === "" || pickupTime === "") {
    document.getElementById("load-btn").disabled = true;
    this.loadButton.classList.add('cursor-not-allowed');
  } else {
    document.getElementById("load-btn").disabled = false;
    this.loadButton.classList.remove('cursor-not-allowed');
  }

  const passengerCountInput = document.getElementById('passenger-count');
  let passengerCount = passengerCountInput.value.trim();

  if (isNaN(passengerCount)) {
    alert('Input must be a number.');
    passengerCountInput.value = '';
    return;
  }
}
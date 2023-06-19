// Prompt the user to enter the speed using the prompt-sync package (npm prompt-sync install)
const prompt = require('prompt-sync')();
const speed = parseFloat(prompt("Enter the car's speed: "));

// Declaration of speed limits and other constants
const speedLimit = 70;              // Speed limit in km/hr
const kmPerDemeritPoint = 5;        // Number of km per demerit point
const maxDemeritPoints = 12;        // Maximum allowed demerit points

function calculateDemeritPoints(speed) {  // Calling the function that calculates demerit points
  if (speed <= speedLimit) {
    console.log("Ok");
    return;
  }

  const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint); // Function that calculates demerit points

  if (demeritPoints > maxDemeritPoints) { //Conditional statement that compares demerit points with max demerit points
    console.log("License suspended");
  } else {
    console.log("Points: " + demeritPoints);
  }
}

// Calling the function with the entered speed
calculateDemeritPoints(speed);

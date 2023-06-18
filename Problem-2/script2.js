function calculateDemeritPoints(speed) { // Declaring a function that generates responses with responses to demerit points with respect to speed

    // Variable declaration with constants of different variables
const speedLimit = 70;              // Speed limit in km/hr
const kmPerDemeritPoint = 5;        // Number of km per demerit point
const maxDemeritPoints = 12;        // Maximum allowed demerit point
}

if (speed <= speedLimit) {          // Condition that ensures speed is within the limit
    console.log("Ok");
    return;
}
const demeritPoints = Math.floor((speed-speedLimit)/ kmPerDemeritPoint); // varaiable declaration 

if (demeritPoints > maxDemeritPoints) { // Conditional statement that displays suspension of license if points execeed the max (12 points)
    console.log("License suspended");

} else {                                // Conditional statement that displays points if latter conditions are not met
    console.log("Points: "+ demeritPoints); 
}
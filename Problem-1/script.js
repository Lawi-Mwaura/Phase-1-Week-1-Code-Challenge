// Function to calculate the grade based on marks
function calculateGrade(marks) {
    if (marks > 79) {                            // Conditional statement to compare mark of the user to the conditions
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <=59) {
        return "C";
    } else if (marks >= 40 && marks <=49) {
        return "D";
    } else {
        return "E";                            // If latter values do not reach the marks threshold it displays "E"
    }
}
// Prompts the user to enter respective marks
const prompt = require('prompt-sync')();// Added a prompt package that allows a prompt without the need for a readline (npm install prompt-sync)

let marks = parseFloat(prompt("Enter the student's marks (between 0 and 100): "));

// If invalid value is put by the user is not a number it displays "Invalid value..."
while ( marks < 0 || marks > 100 || isNaN(marks)) {
    alert("Invalid value! Marks should be between 0 and 100");
    marks = parseFloat(prompt("Enter the student's marks (between 0 and 100"));
}

// Calculates the grade using the calculateGrade() function
let grade = calculateGrade(marks);

// This displays marks on the console
console.log("The student's grade is: "+grade);


// Student name
// Current date
// JS IF Statements

// const credits= prompt("how many credits have you earned?");

const creditsToGraduate = prompt("how many credits have you earned?");
const total = 210 - creditsToGraduate;


if (creditsToGraduate >= 210) { 
	alert (`Congrats, you have enough credits to graduate!`);
} else {
	alert (`You do not have enough credits :(. you need ${total} more to graduate.`);
}



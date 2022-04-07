const username = 'John Smith';
const full_name = 'John Smith';
const firstName = 'John';
const lastName = 'John';


// wrong names
/*
const 1name = 'John Smith';
const full.name = 'John Smith';
const first name = 'John';
const class = 'John';
*/


//asks a name and prints it to the console

let name = prompt('What is your name?');
console.log(`Hello ${name}`);


//asks for the year of birth and prints the age

const currentYear = 2022;
let birthYear = prompt('What is your year of birth?')
let age = currentYear - birthYear;
console.log(`Your age is ${age}`);


//asks for the side length of a rectangle and prints its perimeter

let sideLength = prompt('What is the length of one side of the rectangle?')
console.log(`The perimeter is ${sideLength*4}`);


//asks for the radius of a circle and prints its area
let radius = prompt(`What's the radius?`);
console.log(`The radius is ${Math.PI*(radius**2)}`);

//asks for the distance between two cities and for the time needed to get to the destination. Prints the speed

let distance = prompt(`What's the distance between cities? (in km)`);
let time = prompt(`How much time do you want to spend? (in hr)`);
console.log(`Your speed should be ${distance/time} km/hr`);

//Currency converter
let dollar = prompt('Enter the amount in dollars');
const euro = dollar*0.92;
console.log(`It's ${euro} euro`);
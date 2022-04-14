
//asks for the age and logs the age group to the console

let age = Number(prompt('How old are you?'));

switch (true) {
    case age>=0 && age<=11:
        console.log('Child');
        break;
    case age>=12 && age<=17:
        console.log('Teenager');
        break;
    case age>=18 && age<=59:
        console.log('Adult');
        break;
    case age>=60 && age<=140:
        console.log('Senior citizen');
        break;
    default:
        console.log('Enter a valid age');
}


//asks for a nubmer between 0 and 9 and logs the special character it refers to

let num = Number(prompt('Enter a number between 0 and 9'));

switch (num) {
    case 0:
        console.log(')');
        break;
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;   
    case 8:
        console.log('*');
        break;  
    case 9:
        console.log('(');
        break; 
    default:
        console.log('Enter a valid number');
}


//asks for a range of numbers and logs the sum of all numbers in that range 

let start = Number(prompt('Enter a start number'))
let end = Number(prompt('Enter an end number'))
let sum = 0;

for (let i=start; i<=end; i++) {
    sum += i;
}
console.log(sum);


//asks for two numbers and logs the greatest common divisor 

let firstNumber = Number(prompt('Enter the first number'));
let secondNumber = Number(prompt('Enter the second number'));
let greatestNumber;
let smallestNumber;
let divisor;

if(firstNumber >= secondNumber) {
    greatestNumber = firstNumber;
    smallestNumber = secondNumber;

} else if (firstNumber <= secondNumber){
    greatestNumber = secondNumber;
    smallestNumber = firstNumber;
};

for (let i = greatestNumber; i>=0; i--) {
    if (greatestNumber%i===0 && smallestNumber%i===0) {
        divisor = i;
        break;
    } else {
        continue;
    }
}

console.log(divisor);



// asks for a number and logs all of its divisors

let newNum = Number(prompt('Enter a number'));

for (let i = newNum; i>=0; i--) {
    if(newNum%i === 0) {
        console.log(i);
    } else {
        continue;
    }
}


// asks for a number and logs if it's a palindrome

let normNumber = prompt('Enter a 5-digit number');
let reversedNumber = "";

for (let i=normNumber.length-1; i>=0; i--) {
    reversedNumber += normNumber[i];
}

if (normNumber === reversedNumber) {
    console.log(`${normNumber} is a palindrome`)
} else {
    console.log(`${normNumber} is not a palindrome`)
}



// ask for the price and logs the price with a discount

let price = Number(prompt('Enter the price'))

switch (true) {
    case price>=200 && price<300:
        console.log(`The discount is 3%. You have to pay ${price-(price/100*3)}`);
        break;
    case price>=300 && price<500:
        console.log(`The discount is 5%. You have to pay ${price-(price/100*5)}`);
        break;
    case price>=500:
        console.log(`The discount is 7%. You have to pay ${price-(price/100*7)}`);
        break;
    default: 
        console.log(`There is no discount. You have to pay ${price}`);
}


//asks for 10 numbers and logs number of positive, negative, even, odd numbers and zeros.

let tenNumbers = prompt('Please enter 10 numbers separated by a space');
console.log(tenNumbers);

tenNumbers = tenNumbers.split(" ");

let positiveNum = 0;
let negativeNum = 0;
let zeros = 0;
let evenNum = 0;
let oddNum = 0;

for (let i = 0; i<tenNumbers.length; i++) {
    if (Number(tenNumbers[i]) > 0) {
        positiveNum++;
    }
    if (Number(tenNumbers[i]) < 0) {
        negativeNum++;
    }
    if (Number(tenNumbers[i]) === 0) {
        zeros++;
    }
    if (Number(tenNumbers[i])%2 === 0) {
        evenNum++;
    } else {
        oddNum++;
    }
}

console.log(`Your number have: \n Positive Numbers:${positiveNum}, \n Negative Numbers:${negativeNum}, \n Zeros:${zeros}, \n Even Numbers:${evenNum}, \n Odd Numbers:${oddNum}`);


// displays names of the days of the week in a dialog box until the user clicks 'cancel'

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

for (let i = 0; i<daysOfWeek.length; i++) {
    let displayDay = confirm(daysOfWeek[i]);

    if (displayDay===false) {
        break;
    }

    if (i===daysOfWeek.length-1) {
        i = -1;
    }
}



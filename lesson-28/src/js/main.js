// calculates the number of arguments passed to the function

const calcNumberOfArguments = (...args) => {
    return args.length;
}

console.log(calcNumberOfArguments(5, 'sds', 43, 34343)); //returns 4



// ============================================================

// accepts two numbers and returns: -1 (if the 1st number is smaller than the 2nd), -2 (if the 1st number is greater than the 2nd), 0 (if they are equal)

const checkNumbers = (first, second) => {
    if (first < second) {
        return -1;
    } else if (first > second) {
        return 1;
    } else {
        return 0;
    }
}

console.log(checkNumbers(4, 8)) //returns -1


// ============================================================
// calculates a factorial of a number

const calcFactorial = num => {
    if (num === 0) {
        return 1;
    }

    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }

    return num;
}

console.log(calcFactorial(5)); //returns 120


// ============================================================
//accepts numbers and turns them into 1 number

const getOneNumber = (...args) => {
    let finalNumber = '';

    for (let i = 0; i < args.length; i++) {
        finalNumber += args[i].toString();
    }

    return Number(finalNumber);

}

console.log(getOneNumber(4, 6, 7)); //returns 467


// ============================================================
//calculates the area of a rectangle/square

const calcArea = (width, height = width) => {
    return width * height;
}

console.log(calcArea(4, 5)); //returns 20

console.log(calcArea(4)); //returns 16



// ============================================================
//checks if a number is a 'perfect number' (number = sum of all its divisors excluding the number itself)

const isPerfect = num => {
    let sumOfDivisors = 0;

    //calculates a sum of the divisors
    for (let i = num - 1; i >= 0; i--) {
        if (num % i === 0) {
            sumOfDivisors += i;
        } else {
            continue;
        }
    }

    //checks if the sum of divisors is equal to the number
    if (sumOfDivisors === num) {
        return true;
    } else {
        return false;
    }

}


console.log(isPerfect(496)); //returns true
console.log(isPerfect(5)); //returns false


// ============================================================
//accepts a range of numbers and returns an array of all perfect numbers in that range

const showPerfectNumbers = (startNumber, endNumber) => {
    let perfectNumbers = [];

    //searches for perfect numbers in the range and pushes them into an array
    for (let i = startNumber; i <= endNumber; i++) {
        if (isPerfect(i)) {
            perfectNumbers.push(i);
        } else {
            continue;
        }
    }
    //checks if the array is empty and returns the array of perfect numbers
    if (perfectNumbers.length === 0) {
        return `There are no perfect numbers in that range`;
    } else {
        return perfectNumbers;
    }
}

console.log(showPerfectNumbers(2, 30)); //returns [6, 28]
console.log(showPerfectNumbers(2, 4)); //returns "There are no perfect numbers in that range"
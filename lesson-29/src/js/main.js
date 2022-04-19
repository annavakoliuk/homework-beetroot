// 1. car object

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2018,
    avarageSpeed: 80, //km per hour
    fuelTank: 50, //liter, maximum amount of fuel that can be in the tank
    currentFuel: 50, //liter, current amount of fuel
    fuelConsumption: 6, //liter per 100 km
    drivers: ['John'],

    //shows info about the car
    showInfo() {
        return `Brand: ${this.brand} \nModel: ${this.model} \nYear: ${this.year} \nAvarage speed (km/h): ${this.avarageSpeed} \nFuel tank capacity(liter): ${this.fuelTank} \nCurrent fuel(liter): ${this.currentFuel}\nFuel consumption (liter per 100km): ${this.fuelConsumption} \nDrivers: ${this.drivers}`
    },

    //adds new drivers
    addDriver(name) {
        name = prompt(`Enter a name of the driver`);
        this.drivers.push(name);
    },

    // fills up the tank with fuel to the maximum value
    fillUpTank() {
        this.currentFuel = this.fuelTank;
    },

    //spends the current fuel to drive the distance passed to the function (in km) and returns the distance driven (in km)
    drive(distance) {
        //checks if the value passed as distance is > 0 and is a number
        if (isNaN(Number(distance)) || distance <= 0) {
            return alert('Please enter valid distance (in km)');
        }

        //calculates the fuel needed to drive the given distance
        let fuelNeed = this.fuelConsumption * distance / 100;

        //if there is not enough fuel to drive the given distance
        if (this.currentFuel < fuelNeed) {
            //calculates the distance that can be driven with the current fuel amount
            let distanceDriven = Math.round(this.currentFuel * 100 / this.fuelConsumption);
            this.currentFuel = 0; //spends all the current fuel
            return distanceDriven;
        }

        //if there is enough fuel
        this.currentFuel = Math.round(this.currentFuel - fuelNeed); //spends fuel to drive the given distance
        return distance; //returns the distance driven
    },

    //checks if you can drive and calculates the time needed to drive the given distance
    checkTimeToDrive(distance, driver) {
        distance = prompt('Enter the distance you need to drive')
        driver = prompt('Enter the driver who will drive')

        //checks if the value passed as distance is > 0 and is a number
        if (isNaN(Number(distance)) || distance <= 0) {
            return alert('Please enter valid distance (in km)')
        }

        //checks if there is enough fuel to drive. drive() function returns the distance that can be driven with the current amount of fuel. If that distance isn't equal to the distance passed as an argument -> returns that user don't have enough fuel 
        let distanceDriven = this.drive(distance);
        if (distanceDriven != distance) {
            return alert(`Sorry, it's not enough fuel to drive that distance, please, fill up the tank`);
        }
        //checks if the driver is in the driver list (= if he's allowed to drive)
        if (!this.drivers.includes(driver)) {
            return alert(`Sorry, this driver aren't allowed to drive. Choose other driver or add this driver to the drivers list`);
        }

        //calculates the time needed to drive the distance passed as an argument
        let timeToDriveNoRest = distance / this.avarageSpeed; //time needed with no rest
        let restTime = Math.floor(timeToDriveNoRest / 4); //rest time needed (1 hour rest every 4 hours)

        let timeToDrive = timeToDriveNoRest + restTime;

        return alert(`You'll need to spend ${timeToDrive} hours `)
    },

}

car.checkTimeToDrive();
console.log(car.showInfo());




//==================================================================================================
//2. time object

const time = {
    seconds: 0,
    minutes: 0,
    hours: 0,

    //turns seconds, minutes and hours into strings in the format: hh mm ss
    formatTime(time) {
        if (time < 10) {
            return `0${time.toString()}`
        } else {
            return time.toString();
        }
    },
    showTime() {
        return alert(`The time is ${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`)
    },

    //checks if the user enters valid numbers
    checkCorrectEntry(entry) {
        if (isNaN(entry) || entry < 0) {
            return false;
        } else {
            return true;
        }
    },

    //adds seconds 
    changeSeconds(second = Number(prompt(`How many do seconds do you want to add to the time?`))) {

        if (!this.checkCorrectEntry(second)) {
            return alert(`Please enter a valid number greater than 0`);
        }

        if ((second + this.seconds) < 60) {
            this.seconds += second;
            return;
        } else {
            this.changeMinutes(Math.floor(second / 60)); //if it's more than
            if ((second + this.seconds - 60) <= 60) {
                this.seconds = second + this.seconds - 60;
                return;
            } else {
                this.seconds = (second + this.seconds) % 60;
                return;
            }
        }
    },
    //adds minutes
    changeMinutes(minute = Number(prompt(`How many minutes do you want to add to the time?`))) {

        if (!this.checkCorrectEntry(minute)) {
            return alert(`Please enter a valid number greater than 0`);
        }

        if ((minute + this.minutes) < 60) {
            this.minutes += minute;
            return;
        } else {
            this.changeHours(Math.floor(minute / 60));
            if ((minute + this.minutes - 60) <= 60) {
                this.minutes = minute + this.minutes - 60;
                return;
            } else {
                this.minutes = (minute + this.minutes) % 60;
                return;
            }
        }

    },

    //adds hours
    changeHours(hour = Number(prompt(`How many hours do you want to add to the time?`))) {
        if (!this.checkCorrectEntry(hour)) {
            return alert(`Please enter a valid number greater than 0`);
        }
        if ((hour + this.hours) < 24) {
            this.hours += hour;
            return;
        } else {
            if ((hour + this.hours - 24) <= 24) {
                this.hours = hour + this.hours - 24;
                return;
            } else {
                this.hours = (hour + this.hours) % 24;
                return;
            }
        }
    },

}


time.changeSeconds();
time.showTime();



// addValues(timeToAdd, currentTime, maxNumber, funcChangeNextUnit) {
//     if ((timeToAdd + currentTime) < maxNumber) {
//         currentTime += timeToAdd;
//         console.log(`${timeToAdd}, ${currentTime}, ${maxNumber},`)
//         return;
//     } else {
//         if (maxNumber != 24) {
//             funcChangeNextUnit(Math.floor(timeToAdd / maxNumber))
//         }
//         if ((timeToAdd + currentTime - maxNumber) <= maxNumber) {
//             currentTime = timeToAdd + currentTime - maxNumber;
//             return;
//         } else {
//             currentTime = (timeToAdd + currentTime) % maxNumber;
//             return;
//         }
//     }
// },

// changeHours2(hour) {
//     hour = Number(prompt(`How many hours you want to add to the time?`))
//     if (!this.checkCorrectEntry(hour)) {
//         return alert(`Please enter a valid number greater than 0`);
//     }
//     for (let i = hour; i > 0; i--) {
//         if (this.hours === 24) {
//             this.hours = 0;
//         }
//         this.hours += 1;
//     }
// }
//1. 
//====================================================
//creates class of a circle with `_radius` property
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    //returns radius of the circle
    get radius() {
        return this._radius;
    }

    //accepts an input from a user (radius), checks if the input value is a number>0; sets radius to that number
    set radius(number) {
        if (isNaN(+number) || number <= 0) {
            alert('Enter a valid number greater than 0')
        } else {
            this._radius = +number;
        }
    }

    //returns perimeter
    get diameter() {
        return this._radius * 2;
    }

    //calculates area of the circle
    calcArea() {
        return Math.PI * (this._radius ** 2);
    }

    //calculated the circumference
    calcCircumference() {
        return Math.PI * 2 * this._radius;
    }
}

let newCircle = new Circle(3);

newCircle.radius = 4;

console.log(newCircle.radius);
console.log(newCircle.diameter);
console.log(newCircle.calcArea());
console.log(newCircle.calcCircumference());


//2. 
//====================================================


class Marker {
    constructor(color) {
        this._color = color;
        this._inkLeft = 100;
        this._inkConsumption = 0.5;
    }

    get inkLeft() {
        return `${this._inkLeft}%`;
    }

    get charactersCanBeTyped() {
        return this._inkLeft / this._inkConsumption;
    }

    //shows how much ink left and if there was enough ink to type the whole text
    alertAboutInkLeft(inputText, outputText) {

        if (inputText.length > outputText.length) {
            alert(`Sorry, there was not enough ink for the whole text. Ink left: ${this.inkLeft}`);
        } else {
            alert(`There was enough ink for the whole text. Ink left: ${this.inkLeft}`);
        }

    }

    //accepts one string and displays a part of that string that can be typed with the amount of the ink left. Spaces (' ') consume no ink, so they are not inluded in the number of characters that can be typed. But they *are* included in the output text.
    write(text = prompt(`Enter the text you want to write`)) {

        let index = 0; //index number to iterate through the string
        let nonSpaceCharacters = 0; //number of non-space characters that are included in the output text
        let outputText = ''; //the output text

        //loops trough the input text and adds all characters to the output string until the number of non-space characters reaches the ink limit or until the lenght of the output text is equal to the length of the input text
        while (nonSpaceCharacters < this.charactersCanBeTyped && outputText.length < text.length) {

            //in case of a space, loop adds it to the output text but doesn't count it to the number of characters
            if (text[index] != " ") {
                nonSpaceCharacters += 1;
            }

            outputText += text[index]
            index += 1;
        }

        //displays the output text in the color of the marker
        let markerText = document.getElementById('marker-text');
        markerText.style.color = this._color;
        markerText.innerHTML = outputText;

        //decreases the amount of ink left
        this._inkLeft = this._inkLeft - (nonSpaceCharacters * this._inkConsumption);


        //shows how much ink left and if there was enough ink to type the whole text
        this.alertAboutInkLeft(text, outputText);
    }

}


/*
text to check functions:

1. Non-space characters - 207:

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet odio et lorem tincidunt rutrum. Proin consequat neque at ex malesuada, ac volutpat tellus hendrerit. Curabitur eget libero et turpis ullamcorper fringilla quis sed lectus.

Result: displays first 200 non-space characters


2. Non-space characters - 22

    Lorem ipsum dolor sit amet

Result: displays all 22 characters and stops
*/

// let bluemarker = new Marker('blue');
// bluemarker.write();




// creates a class that can refill ink

class RefillMarker extends Marker {
    constructor(color) {
        super(color);
        this._maxInk = 100;
    }

    refill() {
        this._inkLeft = this._maxInk;
    }

    //modifies the original method from the Marker class and suggest refilling the ink
    alertAboutInkLeft(inputText, outputText) {

        if (inputText.length > outputText.length) {
            if (confirm(`Sorry, there was not enough ink for the whole text. Ink left: ${this.inkLeft}. Refill the ink?`)) {
                this.refill()
                alert(`Great! Ink left: ${this.inkLeft}.`)
            }
        } else {
            alert(`There was enough ink for the whole text. Ink left: ${this.inkLeft}`);
        }

    }


}

let redRefillMarker = new RefillMarker('green');
redRefillMarker.write();
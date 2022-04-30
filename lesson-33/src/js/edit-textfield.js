//default text
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor velit sit amet felis vulputate, euismod euismod tellus iaculis. Ut vitae quam a lorem lacinia auctor ut sit amet ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor velit sit amet felis vulputate, euismod euismod tellus iaculis. Ut vitae quam a lorem lacinia auctor ut sit amet ex.'


//VARIABLES==================================================================

let divText = document.querySelector('.div-text'); //div with text
let textParagraph = document.querySelector('.text'); //<p> element inside div
let inputField = document.querySelector('.input'); // input text area


//TEXT-DIV===================================================

//adds defalut text to the p element inside div
textParagraph.innerHTML = text;
console.log(divText.offsetHeight);


//INPUT=================================================

//hides the input element
inputField.hidden = true;

//resizes the input field when the user types something (to avoid scrollbars)
inputField.addEventListener('input', e => {
    e.target.style.height = 'auto';
    e.target.style.height = (e.target.scrollHeight + 3.6) + 'px';
})



//EVENTS TO CHANGE DIV TO INPUT AND VICE VERSA======================

//changes div to input when crtl+e is pressed
let divToInput = (event) => {
    if (event.ctrlKey && event.keyCode === 69) {

        //resets the defalts behaviour of the key binding
        event.preventDefault();

        //puts the text from div to the input field
        inputField.value = text;

        //sets the height of the input field equal to the div height
        inputField.style.height = divText.offsetHeight + 'px';

        //hides div and shows input
        inputField.hidden = false;
        divText.hidden = true;
    }
}

//saves edits to the text, hides input and shows div with the modified text. when ctrl+ is pressed
let inputToDiv = (event) => {
    if (event.ctrlKey && (event.key === '+' || event.keyCode === 61)) {

        //resets the defalts behaviour of the key binding
        event.preventDefault();

        //sets text value to the text from input
        text = inputField.value;

        //adds that text to the div element
        textParagraph.innerHTML = text;

        //hides input and shows div
        inputField.hidden = true;
        divText.hidden = false;
    }
}

document.addEventListener('keydown', divToInput);
document.addEventListener('keydown', inputToDiv);
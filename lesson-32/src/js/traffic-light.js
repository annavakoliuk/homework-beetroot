let colorClasses = ['red-light', 'yellow-light', 'green-light']; //list of classes that change background to different colors
let lightsList = document.querySelectorAll('.light'); //list of elements with a class 'light' 

let currentLight = 0; //index of a current light in the list of classes '.light'
let currentColor = 0; //index of a current color in the list of color classes

//changes colors of the lights
let changeLight = () => {
    //turns off the current light: removes the class of the current color from the current element
    lightsList[currentLight].classList.remove(colorClasses[currentColor]);

    //checks if the indexes have reached the limit of elements in the lists. if so - sets the indexes to -1 to start from the beginning
    if (currentLight === lightsList.length - 1) {
        currentLight = -1;
    }
    if (currentColor === colorClasses.length - 1) {
        currentColor = -1;
    }

    //changes indexes to move on to the next light and the next color
    currentLight += 1;
    currentColor += 1;

    //turns on the next light: adds the next color class in the list to the next element
    lightsList[currentLight].classList.add(colorClasses[currentColor]);
}

//changes colors of the traffic light on click
document.querySelector('#light-switch').onclick = changeLight;
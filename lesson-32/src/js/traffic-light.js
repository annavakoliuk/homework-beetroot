let redLight = document.querySelector('#red-light');
let yellowLight = document.querySelector('#yellow-light');
let greenLight = document.querySelector('#green-light');

let changeLight = () => {
    if (redLight.classList.contains('red-light')) {
        console.log('sldjfs;d')
        redLight.classList.toggle('red-light');
        yellowLight.classList.toggle('yellow-light');
    } else if (yellowLight.classList.contains('yellow-light')) {
        yellowLight.classList.toggle('yellow-light');
        greenLight.classList.toggle('green-light');
    } else if (greenLight.classList.contains('green-light')) {
        greenLight.classList.toggle('green-light');
        redLight.classList.toggle('red-light');
    }
}

document.querySelector('#light-switch').onclick = changeLight;
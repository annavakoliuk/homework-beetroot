let startButton = document.querySelector('.btn-start');
let stopButton = document.querySelector('.btn-stop');

let inID;

let addFlip = () => {
    console.log('hehehe')
    let cardsList = document.querySelectorAll('.card');
    let randomCard = cardsList[Math.floor(Math.random()*cardsList.length)];

    let front = randomCard.querySelector('.front');
    let back = randomCard.querySelector('.back');

    if (front.classList.contains('flip-front')) {
        console.log('here')
        front.classList.remove('flip-front');
    }
    if (back.classList.contains('flip-back')) {
        back.classList.remove('flip-back');
    }
    
    setTimeout(() =>{
        front.classList.toggle('flip-front');
        back.classList.toggle('flip-back');
    }, 1500);
}

let startFlipping = () => {
    inID = setInterval(addFlip, 2000);
}

let stopFlipping = () => {
    clearInterval(inID);
}

startButton.addEventListener('click', startFlipping);
stopButton.addEventListener('click', stopFlipping);


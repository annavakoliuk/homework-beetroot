let openWindow = () => {
    document.querySelector('.modal-window-holder').classList.add('active');
}

let closeWindow = () => {
    document.querySelector('.modal-window-holder').classList.remove('active');
}

document.querySelector('#open-btn').onclick = openWindow;
document.querySelector('#close-btn').onclick = closeWindow;
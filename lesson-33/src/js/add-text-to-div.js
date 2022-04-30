//appends a <p> with the class name of the element as a child of the element 
let addText = (element) => {
    let text = document.createElement('p');
    text.innerHTML = `this is the ${element.classList[1]} layer`;
    element.appendChild(text);
}

//iterates through all elements with class 'layer' (colorful divs) and adds an event listener to each of them. On click it runs a function that adds a p element to the corresponding div. If clicked on the last div (the inner one) - it runs this function on every parent and adds a <p> to each of them.

document.querySelectorAll('.layer').forEach(layer => {
    layer.addEventListener('click', () => {
        addText(layer);
    })
})
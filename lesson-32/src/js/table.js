// let createElement = (element, id, parentId) => {
//     let newElement = document.createElement(element);
//     newElement.id = id;
//     newElement.innerHTML = prompt(`Enter ${id}`);
//     document.getElementById(parentId).appendChild(newElement);
// }

// createElement('li', 'first name', 'user-list');
// createElement('li', 'surname', 'user-list');
// createElement('li', 'nationality', 'user-list');

// setTimeout(() => {
//     document.body.classList.add('yellow-background')
//     document.getElementById('user-list').classList.add('blue-text')
// }, 1000)

// let changeColor = () => {
//     if (document.body.classList.contains('yellow-background')) {
//         document.body.classList.remove('yellow-background');
//         document.body.classList.add('blue-background')
//         document.getElementById('user-list').classList.remove('blue-text');
//         document.getElementById('user-list').classList.add('yellow-text');
//     } else if (document.body.classList.contains('blue-background')) {
//         document.body.classList.remove('blue-background');
//         document.body.classList.add('yellow-background');
//         document.getElementById('user-list').classList.remove('yellow-text');
//         document.getElementById('user-list').classList.add('blue-text');
//     }
// }

// let button = document.querySelector('.btn');

// console.log(button);

// button.onclick = changeColor;

// // setTimeout(() => {
// //     setInterval(changeColor, 1000)
// // }, 3000);

// //після введення данних через три секунди змінювався бекграунд та колір тексту, кожні дві секунди змінювало бекграунд з блакитного на жовтий



let playList = [

    {

        author: "LED ZEPPELIN",

        song: "STAIRWAY TO HEAVEN",



    },

    {

        author: "QUEEN",

        song: "BOHEMIAN RHAPSODY",


    },

    {

        author: "LYNYRD SKYNYRD",

        song: "FREE BIRD"

    },

    {

        author: "DEEP PURPLE",

        song: "SMOKE ON THE WATER"

    },

    {

        author: "JIMI HENDRIX",

        song: "ALL ALONG THE WATCHTOWER"

    },

    {

        author: "AC/DC",

        song: "BACK IN BLACK"

    },

    {

        author: "QUEEN",

        song: "WE WILL ROCK YOU"

    },

    {

        author: "METALLICA",

        song: "ENTER SANDMAN"

    }

];

//HEADER ROW
//_________________

//creates a header row
let headerRow = document.createElement('tr');
headerRow.className = 'header-row';
document.getElementById('playlist-table').appendChild(headerRow);

//creates a number cell in the header row
let numberCell = document.createElement('th');
numberCell.className = 'table-header';
numberCell.innerHTML = '№';
document.querySelector('.header-row').appendChild(numberCell);

//creates headers based on the keys of the first object of the playlist array
for (let key in playList[0]) {
    let newHeader = document.createElement('th');
    newHeader.className = 'table-header';
    newHeader.innerHTML = key;
    document.querySelector('.header-row').appendChild(newHeader);

}

//ROWS WITH SONGS DATA
//_________________

//iterates through every objects to get data
playList.forEach(item => {

    //creates new row for every object in the array
    let newRow = document.createElement('tr');
    newRow.className = 'table-row';
    document.getElementById('playlist-table').appendChild(newRow);

    //creates a number cell for every object
    let cellNum = document.createElement('td')
    cellNum.className = 'table-data';
    cellNum.innerHTML = playList.indexOf(item) + 1;
    document.querySelectorAll('.table-row')[playList.indexOf(item)].appendChild(cellNum);

    //creates a cell for every key of the object and puts the value of the key in it
    for (let key in item) {
        let newData = document.createElement('td');
        newData.className = 'table-data';
        newData.innerHTML = item[key];
        document.querySelectorAll('.table-row')[playList.indexOf(item)].appendChild(newData);

    }

})
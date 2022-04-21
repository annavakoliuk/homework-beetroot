//creates a class of a products
class Product {
    constructor(name, amount, price) {
        this.name = name;
        this.amount = amount;
        this.price = price;
        this.isBought = false;
    }

    get sum() {
            return this.amount * this.price;
        }
        //sets isBought value to true
    buy() {
        this.isBought = true;
    }
}

//creates instances of the class - product objects
let apple = new Product(`apple`, 4, 2);
let banana = new Product(`banana`, 2, 4);
let strawberry = new Product(`strawberry`, 1, 7);
let potato = new Product(`potato`, 4, 2);


//creates an array with product objects
let shoppingList = [apple, banana, strawberry, potato];

//sets isBought value in the product objects to true
apple.buy();
banana.buy();

//sorts the array by the value of isBought property of every object. Objects with value false - go first.
shoppingList.sort(function(a, b) {
    if (a.isBought === b.isBought) {
        return 0;
    } else if (a.isBought) {
        return 1;
    } else {
        return -1;
    }
});

console.log(shoppingList); //returns [strawberry, potato, apple, banana];


// finds an object in the list by the name property and sets its isBought property to true using Product class method 'buy()'
const buyProduct = (array, name) => {
    array.find(item => item.name === name).buy();
};

buyProduct(shoppingList, 'potato');
console.log(shoppingList);


//filters a list based on the value of isBought property of the objects. Creates two new list: with products that are not bought yet and those that have been bought

const filterIsBought = (array) => {
    return array.filter(item => item.isBought === true);
}

const filterIsNotBought = (array) => {
    return array.filter(item => item.isBought === false);
}

let productsBought = filterIsBought(shoppingList);
let productsNotBought = filterIsNotBought(shoppingList);

console.log(productsBought);
console.log(productsNotBought);


//removes an object with a a specific name value and returns a list without that value
const deleteByName = (array, name) => {
    return array.filter(item => item.name != name);
}

console.log(deleteByName(shoppingList, `apple`)); //returns [strawberry, potato, banana], without apple object



// add new product to the list

const addNewProduct = (array, name, amount, price) => {

    //if the product name is alredy in the list - it increases its amount, if not - creates a new instance of Product class and adds that objects to the list
    if (array.includes(array.find(item => item.name === name))) {
        array.find(item => item.name === name).amount += amount;
    } else {
        let newProduct = new Product(name, amount, price);
        array.push(newProduct);
    }
};

addNewProduct(shoppingList, 'apple', 2, 4); //an amount of apples increased to 6 (4+2)
addNewProduct(shoppingList, 'orange', 3, 5); //created new object orange and added it to the list

console.log(shoppingList);
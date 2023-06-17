
let menu = {
    burger: 100,
    noodles: 200,
    pizza: 300,
    fries: 50,
    cola: 80
}

let cart = [] 

console.log("Cart[" + cart.length + "] Details: " + cart);

let prompt = require('prompt-sync')();

//let choice = prompt("Enter your choice: ")
//console.log("Your choice: " + choice)

while(true){
    let dishName = prompt("Enter Dish Name:")
    
    if (dishName == "quit") {
       break
    }

    let dish = {
       name: dishName,
       price: menu[dishName]
    }
    
    cart.push(dish);
 }

console.log("Final Cart[" + cart.length + "] Details: " + JSON.stringify(cart)); 

for (let dish of cart){
    console.log(dish.name + " " + dish.price)
}


let products = [
    {
       name: 'Adidas Alphabounce',
       price: 5000
    }, 
    {
       name: 'Sandisk USB',
       price: 300
    },
    {
       name: 'Adidas Ultraboost',
       price: 8000
    },
    {
       name: 'Samsung LED TV',
       price: 50000
    },
    {
       name: 'Cadbury 5 star',
       price: 10
    } 
]

function printArray(array){
     
    for (let item of array){
       console.log(item)
    }
 }

 function sortOnPrice(product1, product2) {
    // if the result is positive then product1.price > product2.price
    // ascending order
    return product2.price - product1.price 
 }


//let sortOnPrice = (p1, p2) => p2.price - p1.price;

 products.sort(sortOnPrice)
 products.sort((p1, p2) => p1.price - p2.price)


 printArray(products)
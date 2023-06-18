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

  function filterByPrice(product){
    return product.price > 3000;
  }

  //result = products.filter(filterByPrice);
  result = products.filter(p => p.price > 7000);

  printArray(result)
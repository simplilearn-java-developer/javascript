
let user = {
    name: 'John Watson',
    email: 'john@example.com',
    phone: 123,
    address: {
       adrsLine: '2144 Redwood Shores',
       city: 'Bangalore',
       zipCode: 520001 
    },   
    orders: [
        {
            oid: 1,
            amount: 2000,
            date: '20th Nov, 2021'
        },
        {
            oid: 11,
            amount: 1000,
            date: '25th Nov, 2021'
        }

    ] 
}

console.log(user);
console.log(typeof user);
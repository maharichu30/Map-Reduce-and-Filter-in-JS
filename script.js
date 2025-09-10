let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log(doubled);

let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); 


let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 


// let numbers = [1, 2, 3, 4, 5];
// console.log (numbers);

// let fruits = ['apple', 'banana', 'grapes'];
// console.log (fruits);

// let cars = new Array('ford', 'toyota', 'mercedes');
// console.log(cars);

// console.log(cars[1]);
// cars[1] = 'honda';
// console.log(cars[1]);
// console.log(cars);

// fruits.push('cherry');
// console.log(fruits);
// console.log(fruits.length);

// let x;
// for (x in fruits){
//     console.log (fruits[x]);
// }

// for (x of fruits){
//     console.log(x)
// }



let fruits = ['apple', 'banana', 'grapes'];
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.push('cherry');
console.log(fruits);

fruits.unshift('lemon');
console.log(fruits);

delete fruits[1];
console.log(fruits);

fruits[1] = 'orange';
console.log(fruits);

fruits.splice(1,2);
console.log(fruits);

fruits.splice(2,0,'orange', 'cherry');
console.log(fruits);

let citrusfruits = fruits.slice(0,2)
console.log(fruits);
console.log(citrusfruits);

let evennumbers = [2, 4, 6];
let oddnumbers = [1,3,5];
let primenumbers = [2,3,5];
let numbers = evennumbers.concat(oddnumbers, primenumbers);
console.log(numbers);

ABCD
123
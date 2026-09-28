const numbers = [];
const obj = { a: 1, b: 2 , c: 3, d: 4, };

// valid destructuring assignment (no const/let):
({ a: numbers[0], b: numbers[1], d:numbers[2], c: numbers[3], e: numbers[5]} = obj);

console.log(numbers); // [1, 2]
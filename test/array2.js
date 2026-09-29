const arr = [
    [1, 2, 3, 4, 5],
    [7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16],
];

let newArr = arr.filter(row => row[column].getValue() === 0);

console.log(newArr);
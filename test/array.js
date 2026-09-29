const arr = [
    [1, 2, 3, 4, 5],
    [7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16],
];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
    let tempArr = [];
    tempArr = arr[i].filter(item => item > 11);

    if (!tempArr.length) continue;

    newArr.push(tempArr);
}

// const newArr = arr.filter(item => item[0] > 2);

console.log(newArr);
// console.log(arr);
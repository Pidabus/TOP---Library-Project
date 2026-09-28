// IIFE format: (() => a+b) ();  --> The arrow function '() => a+b;' 
// is wrapped in paranthese '()' --> '(() => a+b)' and then
// immediately executed by putting another pair of paranthese outside --> '(() => a+b) ();'

const calculator = (() => { // calculator here is an OBJECT that will instantiated by the return at the bottom of this IIFE.
    let lastResult;

    const add = (a, b) => {
        lastResult = a + b;
        return lastResult;
    };
    const subtract = (a, b) => {
        lastResult = a - b;
        return lastResult;
    };
    const multiply = (a, b) => {
        lastResult = a * b;
        return lastResult;
    };
    const divide = (a, b) => {
        lastResult = a / b;
        return lastResult;
    };
    const getLastResult = () => lastResult;

    return {add, subtract, multiply, divide, getLastResult};
}) ();

console.log(calculator.add(2, 3));
console.log(calculator.subtract(8, 3));
console.log(calculator.multiply(2.5, 2));
console.log(calculator.divide(50, 10));
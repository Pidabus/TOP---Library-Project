(function() {
    console.log("I'm an anonymous functions");
});

() => {
    console.log("I'm an arrow function");
}; //Do both these functions run? I think they do, but they're just not stored to any references?

//Part 2
anonFn = function () {
    console.log("I'm also an anon func");
};

arrowFn = () => {
    console.log("I'm also an arrow func");
};

anonFn();
arrowFn();

//Part 3
const hello = (function () { // This runs immediately even though hello isn't a function that was called?
    console.log("I'm an anon IIFE");
}) ();

(() => {
    console.log("I'm an IIFE");
}) ();

//part 4
const domElement = document.querySelector("div");

domElement.addEventListener("click", function() {
    console.log("An element was clicked!");
}); //Why does this run after click, but...

let hi = function() {console.log("hi");};
domElement.addEventListener("click", hi); // Well I don't know if this works?
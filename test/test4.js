function myCallback() {
    console.log("This is the callback function");
}

function myCaller(callbackFn) {
    console.log("This is my caller function");

    callbackFn;
}

myCaller(myCallback());
//HOF = Higher order function

//1. call back- Fuction which can be pass as a parameter to other function.

function greet(userName, callback) {
    console.log("hello", userName);
    callback();
}

function callback() {
    console.log("I am call back");
}

greet("Kalai", callback);

/* if we need to call the callback from greet function..add the callback inside the function and then add 
the parameter inside the parameter */
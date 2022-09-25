//HOF = Higher order function

//1. call back- Fuction which can be pass as a parameter to other function.

/* function greet(userName, callback) {
    console.log("hello", userName);
    callback();
}

function callback() {
    console.log("I am call back");
}

greet("Kalai", callback); */

/* if we need to call the callback from greet function..add the callback inside the function and then add 
the parameter inside the parameter */


//2. arrow function
/* 
const callback = (n) => {
    return n ** 2;
};

function squ(callback, n) {
    return callback(n) * n;
}

console.log(squ(callback, 5)); */

//setTimeOut
/* function CourseName() {
    console.log("Welcome to JS BootCamp");
}

setTimeout(CourseName, 2000);

setTimeout(() => {
    console.log("Welcome to JS BootCamp");
}, 3000); */

//setInterval

/* setInterval(() => {
    console.log("Refresh the page");
}, 2000); */

//foreach - only work with array
/* 
const greet = ["Hey", "Hi", "Hello", "Hurray"];

greet.forEach((val) => {
    console.log(val);

}); */

//map -iterate over array and modify the array

/* const num = [1, 2, 3, 4, 5];
let abc = num.map((val)=>{
    val* val;

});
console.log(abc); */

//Filter

/* const countries = ["India", "Germany", "Japan", "England", "Finland", "Africa"];
const ret = countries.filter((country) => {
    return country.includes("an");

});
console.log(ret); */

//reduce

/* const chocolate = [1, 2, 3, 4, 5];
const wrap = chocolate.reduce((acc, pos) => acc + pos, 0);
console.log(wrap); */

//sort

/* const names = ["Kalai", "Shivani", "Siva", "Ragu", "Arasi"];
console.log(names.sort()); //[ 'Arasi', 'Kalai', 'Ragu', 'Shivani', 'Siva' ] */

//destructuring --- 1. spread 2. Rest
/* function sum(x,y){
    return x+y;
}

let variable = [1,2];
console.log(sum(...variable)); //spread

function sumTwo(...args){
    console.log(args);
    args;

} 

sumTwo(1,2,3,4,5,6,7,8,9);
*/

//set and map


/* //1. Set
let tech = ["html", "css", "js", "nodejs", "reactjs", "Angular", "html", "css"];

let language = new Set(tech);
console.log(language); //{ 'html', 'css', 'js', 'nodejs', 'reactjs', 'Angular' } */

//2. Map

/* let map = new Map();
//console.log(map);

//Setter
map.set("1", "str1");
map.set(true, "str2");
map.set(1, "str3");

console.log(map); //Map(3) { '1' => 'str1', true => 'str2', 1 => 'str3' }

//getter
console.log(map.get(1)); //str3
 */
//Closure- when an inner function is capable of accessing the outer function from inner function(check once again)

/* function Grandparent() {
    let dad = "Hello";

    function parent() {
        console.log(dad);
    }
    parent();
}
Grandparent(); //Hello */

//real world use of closure
/* 
function grandparent() {
    let dad = "Hello Dad";

    function parent() {
        console.log(dad);
    }
    return parent;
}



let var1 = grandparent();
var1(); */

//try and catch

/* try {
    let firstName = "Kalai";
    console.log(firstName + " " + lastName);
} catch (err) {
    console.log(err);
    console.log(err.name); //ReferenceError
} finally {
    console.log("I will run"); //I will run
}
console.log("HELLO WORLD");
 */
//Promise - 
//callback, .then, .catch, asyn await
//pending, resolve and rejected

/* const MakePromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        const Exam = ["HTML", "CSS", "JS", "Tailwind"];
        if (Exam.length < 0) {
            resolve("Done");
        } else {
            rejected("Rejected");
        }
    }, 2000);

});

MakePromise.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
}); */


//Async await
/* 
const uno = () => {
    return "I am One";
};

const dos = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve("I am TWO");

        }, 2000);
    });
};

const tres = () => {
    return "I am three";
};

const callAllFunction = async() => {
    let one = uno();
    console.log(one);

    let two = await dos();
    console.log(two);

    let three = tres();
    console.log(three);
};

callAllFunction(); */


//fetch
const url = "https://restcountries.com/v2/all"; //Countries API

fetch(url)
    .then((result) => result.json())
    .then((data) => { console.log(data); })
    .catch((error) => { console.error(error); });


//DOM
//string
let user = "kalai";
console.log(user); //kalai


//toUppercase
let upperUser = user.toUpperCase();
console.log(upperUser);

//conditional
let rating = 8;

if (rating == 5) {
    console.log("medium");
} else if (rating < 5) {
    console.log("poor");
} else if (rating > 5) {
    console.log("excellent");
}

//switch
let student = "Kalai";

switch (student) {
    case "Shiva":
        console.log("HI Shiva");

        break;
    case "Kalai":
        console.log("HI KalaiVani");
        break
    default:
        console.log("Hello Hi");
        break;
}

//Ternary operator

let raining = false;

raining ? console.log("It's raining") : console.log("No Rain");


//loops
//1. for
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//2. while
let a = 0;

while (a <= 5) {
    console.log(a);
    a++;
}

//Array

let studentNames = ["Kalai", "Shiva", "Shivani", "Ragu", "Banu"];
let upperName = [];


//gives the new array through iteration

for (let i = 0; i < studentNames.length; i++) {
    upperName.push(studentNames[i].toUpperCase());
}
console.log(upperName);



//for of ---Array---gives the name one by one

for (let name of studentNames) {
    console.log(name);
}


//Object

let employes = {
    name: "Kalai",
    age: 35,
    project: ['js', 'HTML', 'CSS'],
    userAge: function() {
        return this.age;
    }
}
console.log(employes); //gives full object
console.log(employes.project); //[ 'js', 'HTML', 'CSS' ]
console.log(employes.userAge()); //35


//date

let date = new Date();
console.log(date);
console.log(date.toString()); //Sat Oct 01 2022 23:24:04 GMT+0200 (Central European Summer Time)
console.log(date.getFullYear()); //2022
console.log(date.getMonth()); //9
console.log(date.getDay()); //6
console.log(date.getDate()); //1


//function

function square(num) {
    return num * num;
}
let squareNum = square(4);
console.log(`Square number of 4 is ${squareNum}`); //Square number of 4 is 16


//eg

function sum() {
    let sums = 0;
    //console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 }
    for (i = 0; i < arguments.length; i++) {
        sums = sums + arguments[i];
    }
    return sums;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));


//Arrow functions

const greeting = () => {
    console.log("Welcome all to The BootCamp");
}

greeting();
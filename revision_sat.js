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
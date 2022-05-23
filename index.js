// fizz buzz
function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if(i % 3 == 0 && i % 5 == 0)
            console.log("FizzBuzz")
        else if(i % 3 == 0)
            console.log("Fizz");
        else if(i % 5 == 0)
            console.log("Buzz");
        else
            console.log(i);
    }
}
/*
let input = prompt("Enter a number");
fizzBuzz(input);
*/

console.log("Hello World!");

// variables
const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

// let
let admin;
let name = "John";
admin = name;
console.log(admin);

// const
const planet = "Earth";
let currentVisiter = "Derrick";

// typeof
console.log(typeof planet)
console.log(4.2323432.toFixed(2))
console.log(typeof(true));

// operators
console.log((4 + 6 + 9) / 77);
let a = 10;
let b = 7 * a;
console.log(b);

// string to number
let myNumber = "34";
console.log(myNumber + 3);
console.log(Number(myNumber) + 5);

// unary + to number
let three = "3";
console.log(typeof +three);

// special Numeric Values
console.log(Infinity);
console.log(1 / 0);
console.log(NaN);
console.log("Hello" / 3);

// template literals
console.log(`the result is ${3 + 4}`);
console.log(`his name is ${admin}`);
console.log("His name is", admin);

// boolean
let isGreater = 4 > 1;
console.log(isGreater);

// null
let age = null;
console.log(age);

// undefined
let dog;
console.log(dog);

// quotes
console.log("She said \"Hello\"");
console.log('I can\'t go');

// new line
let quote = "This is line one\nThis is line two";
console.log(quote);
console.log(quote.length);

// strings
let part = quote.slice(4, 8);
console.log(part);
let replaced = quote.replace("line", "sentence");
console.log(replaced);
replaced = quote.replace(/line/g, "sentence");
console.log(replaced)
console.log("derrick".toUpperCase());
console.log("DOG".toLowerCase());

// conditional
let result = 5 > 4 ? 10 : 11;
console.log(result);

//prompt
/*
age = prompt("Age?", 18);
let message = (age < 3) ? "Hi baby!" :
    (age < 18) ? "Hello" :
    (age < 100) ? "Greetings!" :
    "What an unusual age!";
alert(message);
*/

// ?
result = (1 + 3 < 4) ? "Below" : "Over";

let login = "Director";
message = (login == "Employee") ? "Hello" :
    (login == "Director") ? "Greetings" :
    (login == "") ? "No login" :
    "";
console.log(message);

// switches
const day = new Date().getDay();
switch (day) {
	case 0:
		console.log("It's Sunday, time to relax!");
		break;
	case 1:
		console.log("Happy Monday!");
		break;
	case 2:
		console.log("It's Tuesday. You got this!");
		break;
	case 3:
		console.log("Hump day already!");
		break;
	case 4:
		console.log("Just one more day 'til the weekend!");
		break;
	case 5:
		console.log("Happy Friday!");
		break;
	case 6:
		console.log("Have a wonderful Saturday!");
		break;
	default:
		console.log("Something went horribly wrong...");
}

const grade = 87;
switch (true) {
	// If score is 90 or greater
	case grade >= 90:
		console.log("A");
		break;
	// If score is 80 or greater
	case grade >= 80:
		console.log("B");
		break;
	// If score is 70 or greater
	case grade >= 70:
		console.log("C");
		break;
	// If score is 60 or greater
	case grade >= 60:
		console.log("D");
		break;
	// Anything 59 or below is failing
	default:
		console.log("F");
}

const month = new Date().getMonth();

switch (month) {
	// January, February, March
	case 0:
	case 1:
	case 2:
		console.log("Winter");
		break;
	// April, May, June
	case 3:
	case 4:
	case 5:
		console.log("Spring");
		break;
	// July, August, September
	case 6:
	case 7:
	case 8:
		console.log("Summer");
		break;
	// October, November, December
	case 9:
	case 10:
	case 11:
		console.log("Autumn");
		break;
	default:
		console.log("Something went wrong.");
}

// functions
function myFunction(){
    console.log("Hello");
}
myFunction();

// anonymous function
function logKey(event){
    console.log(`You pressed ${event.key}`);
}

// random
function random(number){
    return Math.floor(Math.random() * number);
}

// add7
function add7(num){
    return num + 7;
}
console.log(add7(5));

// multiply
function multiply(num1, num2){
    return num1 * num2;
}
console.log(multiply(3, 4));

// capitalize
function capitalize(word){
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
console.log(capitalize("dERRick"));

// last letter
function lastLetter(word){
    return word[word.length - 1];
}
console.log(lastLetter("derrick"));

// function copy
function sayHi(){
    console.log("hello");
}
let func = sayHi();
func;

// function expression
let sum = function(a, b){
    return a + b;
};
console.log(sum(3, 4));

// arrow functions
let add = (a, b) => a + b;
console.log(add(1, 3));

let double = n => n*2;
console.log(double(5));

let sayHello = () => console.log("Hello!");
sayHello();

let average = (num1, num2) => {
    let total = num1 + num2;
    return total / 2;
};
console.log(average(6, 6));
'use strict';

/*var leftBorderWidth = 1;
{
    let second = 2;
}
const pi = 3.14; */

/*var number = 5;
var string = "Hello!";
var symbol = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log("string"*9);

let something;
console.log(something);

let person = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person.name);
console.log(person["name"]);

let array = ["plum.png", "orange.jpeg", "apple.bmp"];

console.log(array[0]); */

/* //  - to String

// 1)
String(null);
console.log(typeof(String(null)));
console.log(typeof(String(true)));
console.log(typeof(String(675)));

// 2)
console.log("Do" + "da");
console.log("Doda" + "42");
console.log("Doda" + false);
console.log(typeof("Doda" + "42"));
console.log('https://vk.com/catalog/' + 5);

//  - to Number 

// 1)
console.log(typeof(Number(null)));
console.log(typeof(Number("Dooda")));

// 2)
console.log(typeof(+'5'));
console.log(typeof(35 + +'5'));
console.log(35 + +"5");

// 3)
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt("Hello?", '');

//  - to Boolean

// 1)

// always false(nulls):
0, '', null, undefined, NaN

// notnulls:
' '

let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if(switcher) {
    console.log("Working...");
}

// 2)
console.log(typeof(Boolean('5')));

// 3)
console.log(typeof(!!56)); */

/* // alert("Hello, World!");

// let answer = confirm("Are you here?");

// console.log(answer);

let answer = prompt("Are you over 18 years old?", "");

console.log(answer);

let answer = prompt("Are you over 18 years old?", "Yes");

console.log(typeof(answer));

console.log(typeof(null)); */

/* console.log("Guestapo is a " + "human");
console.log(1 + "-human");

let answer = +prompt("Are you over 18 years old?", "Yes");

console.log(typeof(answer));

console.log(1 + +"-human");

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

let incr1 = 10,
    decr1 = 10;

console.log(++incr1);
console.log(--decr1);

let incr2 = 10,
    decr2 = 10;

console.log(incr2++);
console.log(decr2--);

console.log(5%2);
console.log("2" == 2); //comparison by values
console.log("2" === 2); // comparison by data types (i.e. Number, String, Boolean, etc.)

let isChecked = true,
    isClose = true;

console.log(isChecked && isClose); //true if both (all) objects are true
console.log(isChecked || isClose); //true if one of the objects is true

console.log(isChecked && !isClose); // ! turns boolean type of the object to the opposite (i.e. false to true, and vice versa) */

/*
if (2*4 == 10) {
    console.log("Right!");
} else {
    console.log("Wrong!");
};

let num = 50

if (num < 49) {
    console.log("Wrong!");
} else if (num > 100) {
    console.log("Too many!");
} else {
    console.log("Right!");
};

(num == 50) ? console.log("Right!") : console.log("Wrong!");

switch (num) {
    case num < 49:
        console.log("Wrong!");
        break;
    case num > 100:
        console.log("Too many!");
        break;
    case num > 80:
        console.log("Still too many!");
        break;
    case 50:
        console.log("Right!");
        break;
    default:
        console.log("Something went wrong!");
        break;
};
*/

// First task

let money = prompt("How much is your monthly budget?", "")
let time = prompt("Input the date in YYYY-MM-DD format.", "")

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let exp_q1_1 = prompt("Enter the required expenditure item for this month.", ""),
    exp_q1_2 = prompt("How much will it cost?", ""),
    exp_q2_1 = prompt("Enter the required expenditure item for this month.", ""),
    exp_q2_2 = prompt("How much will it cost?", "");

appData.expenses[exp_q1_1] = exp_q1_2;
appData.expenses[exp_q2_1] = exp_q2_2;

alert(appData.budget / 30);
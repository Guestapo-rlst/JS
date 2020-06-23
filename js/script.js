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

/*
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
*/

// let whl = 500;
// while (whl < 510) {
//     console.log(whl);
//     whl++;
// }

// let dwhl = 500
// do {
//     console.log(dwhl);
//     dwhl++;
// }
// while (dwhl < 509)

// for (let frlp = 1; frlp < 9; frlp++) {
//     if (frlp == 3) {
//         continue;
//     }
//     if (frlp == 5) {
//         break;
//     }
//     console.log(frlp);
// }

// Second task
/*
// let x = 5;
// alert(x++);

// console.log([] + false - null + true);

// let y = 1;
// let x = y = 2;
// alert(x);

// console.log([] + 1 + 2);

// alert("1"[0]);

// console.log(2 && 1 && null && 0 && undefined);

// let a = 1,
//     b = 89;
// console.log(!!(a && b));
// console.log(a && b);

// alert(null || 2 && 3 || 4);

// let a = [1, 2, 3];
// let b = [1, 2, 3];
// if (a == b) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// alert(+"Infinity");

// console.log(!!("ejik" > "yabloko"));

// console.log(0 || "" || 2 || undefined || true || false);
*/

// Third task
/*
let money = +prompt("How much is your monthly budget?", "")
let time = prompt("Input the date in YYYY-MM-DD format.", "")

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// for( let i = 0; i < 2; i++) {
//     let a = prompt("Enter the required expenditure item for this month.", ""),
//         b = prompt("How much will it cost?", "");
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("Done!");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Wrong input");
//         i--;
//     }
// }

// let i = 0
// while (i < 2) {
//     let a = prompt("Enter the required expenditure item for this month.", ""),
//         b = prompt("How much will it cost?", "");
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("Done!");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Wrong input");
//         i--;
//     }
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt("Enter the required expenditure item for this month.", ""),
//         b = prompt("How much will it cost?", "");
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("Done!");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Wrong input");
//         i--;
//     }
//     i++;
// } while (i < 2)

appData.moneyDaily = appData.budget / 30;

alert("Daily budget is " + appData.moneyDaily);

if (appData.moneyDaily <= 100) {
    console.log("Minimum income level");
} else if (appData.moneyDaily > 100 && appData.moneyDaily < 2000) {
    console.log("Average income level");
} else if (appData.moneyDaily > 2000) {
    console.log("High income level");
} else {
    console.log("Error");
}
*/

// let num = 20;
// function showFirstMessage (text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello, world!");
// console.log(num);

// console.log(calc(8,4));

// function calc(a,b) {
//     return (a + b);
// } // можно вызвать и до, и после объявления функции (function declaration)

// console.log(calc(3,4));


// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let calcNew = function(a,b) {
//     return (a + b);
// } // невозможно вызвать функцию перед её объявлением (function expression)

// let calcNeww = (a,b) => a + b

// console.log(calcNeww(3,4));

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.7";

// console.log(Math.round(twelve));

// let uno = "12.7px";

// console.log(parseInt(uno));
// console.log(parseFloat(uno));

// let c = 4
// function addX(x) {
//   return function(n) {
//      return n + x;
//   }
// }
// const addThree = addX(3);
// console.log(addThree);
// let d = addThree(c);
// console.log('example partial application', d);

// function sumAB(a, b) {
//     return a + b;
// }

// alert(`1 + 2 = ${sumAB(1, 2)}.`);

// let guestList = `Guests:
// John
// Pete
// Mary`; // these quotes make it possible to break line ``
// alert(guestList);

// let guestList2 = "Guests:\nJohn\nPete\nMary";
// alert (guestList2);

// let mma = "Conot \"The Notorious\" \\McGregor";
// alert(mma); // to use backslash, single or double quotes, add backslash just before the quote or backslash sign

// alert("\uA238 and \u{1F60D}");

// alert(`My\n`.length); // 3, because \n is one symbol

// let rndwrd = `Just do it!`;

// alert(rndwrd[1]);
// alert(rndwrd[rndwrd.length - 1]); //shows the last symbol

// for (let char of rndwrd) {
//     alert(char);
// }

// let word = `Komoji`;

// alert(word.toUpperCase());
// alert(word.toLowerCase());
// alert(word[2].toUpperCase());

// let str = `Widget with id`;

// alert(str.indexOf(`Widget`));
// alert(str.indexOf(`widget`));
// alert(str.indexOf(`id`)); // first time `id` substring appears in the `Widget`, and in the 1 and 2 positions
// alert(str.indexOf(`id`, 2)); // second time `id` appearss in the 12 and 13 positions

// let target = `id`;
// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;

//     alert(`Position is: ${foundPos}`);
//     pos = foundPos + 1;
// }

// if (str.indexOf(`Widget`) != -1) {
//     alert(`There is a matching`);
// }

// if (~str.indexOf(`Widget`)) {
//     alert(`There is a matching`);
// }

// alert(str.includes(`Widget`));
// alert(str.includes(`widget`));
// alert(str.includes(`Widget`, 2));

// alert(str.startsWith(`Wi`));
// alert(str.endsWith(`id`));

// let str = `stringify`;

// alert(str.slice(0, 5)); // does not include 5-symbol, i.e. `g`
// alert(str.slice(3)); // starts from position 3, i.e `i`, and till the end
// alert(str.slice(-4, -1)); // does not include -1-symbol, i.e. `y`. Can use negative numbers

// alert(str.substring(2, 6)); // can change positions' places:
// alert(str.substring(6, 2)); // does not include the greatest position, in this case `6`. Can not use negative numbers

// alert(str.substr(2, 4)); // `4` is the length of the substring, `2` is the position, where the substring begins
// alert(str.substr(-5, 3)); // the starting position can be a negative number (`-5`)

// let space = `    Spacey    `;
// alert(space.trim().repeat(3));


// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.NaN);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.prototype);
// console.log(Number.isNaN(NaN));
// console.log(Number.isFinite(2));
// console.log(Number.isInteger(234));
// console.log(Number.EPSILON);
// console.log(Number.isSafeInteger(2524624614145123));
// console.log(Number.parseFloat('124.32'));
// console.log(Number.parseInt('124.32'));
// console.log(Number.prototype.toExponential(2));
// console.log(Number.prototype.toFixed(2));
// console.log(Number.prototype.toLocaleString(121));
// console.log(Number.prototype.toPrecision(2.4325215));
// console.log(Number.prototype.toString(30));
// console.log(Number.prototype.valueOf(22));
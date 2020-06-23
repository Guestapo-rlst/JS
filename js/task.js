let money, time;

function start() {
    money = +prompt("How much is your monthly budget?", "");
    time = prompt("Input the date in YYYY-MM-DD format.", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("How much is your monthly budget?", "");
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for( let i = 0; i < 2; i++) {
        let a = prompt("Enter the required expenditure item for this month.", ""),
            b = +prompt("How much will it cost?", "");
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("Done!");
            appData.expenses[a] = b;
        } else {
            console.log("Wrong input");
            i--;
        }
    }
}
chooseExpenses();

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

function detectDailyBudget() {
    appData.moneyDaily = Number((appData.budget / 30).toFixed());
    alert("Daily budget is " + appData.moneyDaily);
}

detectDailyBudget();

function detectLevel() {
        if (appData.moneyDaily <= 100) {
        console.log("Minimum income level");
    } else if (appData.moneyDaily > 100 && appData.moneyDaily < 2000) {
        console.log("Average income level");
    } else if (appData.moneyDaily > 2000) {
        console.log("High income level");
    } else {
        console.log("Error");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What is the amount of your savings?", ""),
            percent = +prompt(`At what percentage?`, ``);

        appData.monthIncome = save / 100 / 12 * percent;
        alert(`Monthly income from your deposit is: ` + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    let opti = 0;
    while (opti < 3) {
        let optq = prompt(`Enter the amount of optional expenditure number ` + (opti + 1), ``);
        while (isNaN(optq) || optq == `` || optq == null) {
            optq = prompt(`Enter the amount of optional expenditure number ` + (opti + 1), ``);
        }
        appData.optionalExpenses[opti + 1] = optq;
        opti++;
    }
}

chooseOptExpenses();
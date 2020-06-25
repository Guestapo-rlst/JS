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
    savings: true,
    chooseExpenses: function() {
        for( let i = 0; i < 2; i++) {
            let a = prompt("Enter the required expenditure item for this month.", ""),
                b = +prompt("How much will it cost?", "");
            if ( (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("Done!");
                appData.expenses[a] = b;
            } else {
                console.log("Wrong input");
                i--;
            }
        }
    },
    detectDailyBudget: function() {
        appData.moneyDaily = Number((appData.budget / 30).toFixed());
        alert("Daily budget is " + appData.moneyDaily);
    },
    detectLevel: function() {
        if (appData.moneyDaily <= 100) {
            console.log("Minimum income level");
        } else if (appData.moneyDaily > 100 && appData.moneyDaily < 2000) {
            console.log("Average income level");
        } else if (appData.moneyDaily > 2000) {
            console.log("High income level");
        } else {
            console.log("Error");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("What is the amount of your savings?", ""),
                percent = +prompt(`At what percentage?`, ``);
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert(`Monthly income from your deposit is: ` + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        let opti = 1;
        while (opti < 4) {
            let optq = prompt(`Enter the amount of optional expenditure number ` + (opti + 1), ``);
            while (isNaN(optq) || optq == `` || optq == null) {
                optq = prompt(`Enter the amount of optional expenditure number ` + (opti + 1), ``);
            }
            appData.optionalExpenses[opti] = optq;
            opti++;
        }
    },
    chooseIncome: function() {
        let items = prompt(`What are the sources of your additional income? (list them with a comma)`, ``);
        while ( (typeof(items)) != 'string' || items == `` || items == null) {
            items = prompt(`What are the sources of your additional income? (list them with a comma)`, ``);
        }
        appData.income = items.split(`, `);
        let otheritems = prompt(`Maybe any other sources?`);
        while ( (typeof(otheritems)) != 'string' || otheritems == `` || otheritems == null) {
            otheritems = prompt(`Maybe any other sources?`);
        }
        appData.income.push(otheritems);
        appData.income.sort();
        appData.income.forEach(function(incitems, i) {
            alert(`Ways to earn extra money:\n` + (i + 1) + `: ` + incitems);
        });
    }
};

for (let key in appData) {
    console.log(`Our program includes the following data: ` + key + ` - ` + appData[key]);
}

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
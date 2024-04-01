#! /user/bin/env node
import inquirer from 'inquirer';
// Asking question from users through Inquirer
console.log("\n\tWelcome To \'Code With Sunny\' -CLI Simple Scientific Calculator");
let answer = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select One Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Additon", "Subtraction", "Multiplication", "Division"],
    },
]);
// Condition statement If-Else
if (answer.operator === "Additon") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid Input");
}
// console.log(answer)

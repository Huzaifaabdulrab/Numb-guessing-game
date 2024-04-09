#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = false;
while (!condition) {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            message: chalk.blue("Please guess a number between 1 to 10"),
            type: "number",
        },
    ]);
    if (answer.userGuessedNumber === randomNumber) {
        console.log(chalk.green.bgBlack.bold("Congratulation you guess write number"));
        condition = true;
    }
    else {
        console.log(chalk.red.underline(`Please (Try Again) the number is ${randomNumber}`));
    }
}

#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 277.54,
    INR: 83.30,
    EUR: 0.92,
    NZD: 1.66,
    NPR: 133.08,
    MAD: 10.06,
    EGP: 47.33,
    IRR: 42075.00,
    AFN: 71.23,
    IQD: 1308.17,
};
let userSelection = await inquirer.prompt([
    {
        name: "from",
        message: "select your currency which you want to convert",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQD"]
    },
    {
        name: "to",
        message: "select your currency in which you want to convert",
        type: 'list',
        choices: ["USD", "PKR", "INR", "EUR", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQD"]
    },
    {
        name: "Amount",
        message: "How much A mount you want to convert",
        type: "number"
    }
]);
let fromlist = currency[userSelection.from];
let tolist = currency[userSelection.to];
let Amount = userSelection.Amount;
let baseAmount = Amount / fromlist;
let convertedAmount = baseAmount * tolist;
let result = Math.round(convertedAmount);
console.log(result);

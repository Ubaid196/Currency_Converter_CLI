#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

async function myBanner() {
  await showBanner("\nCurrency Converter", chalk.blue("Welcome!"), "green");
}
await myBanner();

let currencies = {
  "PKR": {
    "USD" : 0.0037452731,
    "EUR" : 0.003508056, 
    "GBP" : 0.0031064928,
    "CNY" : 0.025563116,
    "SAR" : 0.014044774,
    "INR" : 0.30968471, 
    "PKR" : 1
  },
  "USD": {
    "USD" : 1,
    "EUR" : 0.93662202, 
    "GBP" : 0.82906933,
    "CNY" : 6.8247661,
    "SAR" : 3.75,
    "INR" : 82.690167, 
    "PKR" : 267.26153
  },
  "EUR": {
    "USD" : 1.0675442,
    "EUR" : 1, 
    "GBP" : 0.8851085,
    "CNY" : 7.2861276,
    "SAR" : 4.0031554,
    "INR" : 88.284731, 
    "PKR" : 286.29774
  },
  "GBP": {
    "USD" : 1.2059796,
    "EUR" : 1.129748, 
    "GBP" : 1,
    "CNY" : 8.2311182,
    "SAR" : 4.5225726,
    "INR" : 99.746744, 
    "PKR" : 323.51514
  },
  "CNY": {
    "USD" : 0.14651065,
    "EUR" : 0.13725968, 
    "GBP" : 0.12148021,
    "CNY" : 1,
    "SAR" : 0.54940542,
    "INR" : 12.118019, 
    "PKR" : 39.317436
  },
  "SAR": {
    "USD" : 0.26666667,
    "EUR" : 0.24979745, 
    "GBP" : 0.2210732,
    "CNY" : 1.820031 ,
    "SAR" : 1,
    "INR" : 22.053672, 
    "PKR" : 71.42037
  },
  "INR": {
    "USD" : 0.012090853,
    "EUR" : 0.011324818, 
    "GBP" : 0.010023303,
    "CNY" : 0.082521256,
    "SAR" : 0.045343359,
    "INR" : 1, 
    "PKR" : 3.2337829
  }
}

// console.log(`Today Currency Rates`)
// console.log(currencies)

async function currencyConverter(){
  let userInput : {
    convertFrom : "PKR"|"USD"|"EUR"|"GBP"|"CNY"|"SAR"|"INR",  
    convertTo : "PKR"|"USD"|"EUR"|"GBP"|"CNY"|"SAR"|"INR",
    reqdAmount: number  
  } = await inquirer.prompt([
    {
      name: "convertFrom",
      type: "list",
      choices: ["PKR", "USD", "EUR", "GBP", "CNY", "SAR", "INR"],
      message: chalk.bgCyan("Select Your Currency: ")
    },
    {
      name: "convertTo",
      type: "list",
      choices: ["PKR", "USD", "EUR", "GBP", "CNY", "SAR", "INR"],
      message: chalk.bgCyan("Select Your Required Currency: ")
    },
    {
      name: "reqdAmount",
      type: "number",
      message: chalk.bgCyan("Enter Amount to convert: ")
    },
  ])

  const {convertFrom, convertTo, reqdAmount }= userInput

  if(convertFrom && convertTo && reqdAmount){
    let results = currencies[convertFrom][convertTo]*reqdAmount
    let result=results.toFixed(3);
    console.log(chalk.bgGreen(`\n${reqdAmount}${convertFrom} to ${convertTo} = ${result}`));

    startAgain()
  }else{
    console.log(`\nInvalid Input!`);
    
  }
}
currencyConverter();

async function startAgain() {
    let againStart = await inquirer.prompt({
      type: "list",
      name: "restartAgain",
      choices: [`Yes`, `No`],
      message: chalk.bgBlue("\nDo you want to continue? "),
    });

    let user_Reqd=againStart.restartAgain;

    if(user_Reqd === `Yes`){
      console.clear();
      currencyConverter();
      
    }else if (user_Reqd === `No`){
      console.log(chalk.blueBright(`~~~~~~~~~~~~THANK YOU FOR USING CURRENCY EXCHANGE APP~~~~~~~~~~~~`));
      
    }
}





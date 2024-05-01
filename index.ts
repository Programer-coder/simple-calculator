#! /use/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter firstnumber", type: "number", name: "firstnumber" },
  { message: "enter secondnumber", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

// conditional statement
if (answer.operators === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operators === "Substraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select  valid operator");
}

#! /usr/bin/env node

import inquirer from "inquirer";

const answers:{
    sentence:string,

} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the word:"
    }
])

let words =answers.sentence.split(" ")
console.log(`your sentence word count is ${words.length}`)
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
let words = answers.sentence.split(" ");
console.log(`your sentence word count is ${words.length}`);

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license.',
            choices: [ 'Apache 2.0', 'BSD3', 'MIT', 'None'],
        }
    ])
};

// TODO: Create a function to initialize app
const init = () => {
questions()
.then(answers => {
    fs.writeFileSync('READMETEST.md', generateMarkdown(answers));
})
};

// Function call to initialize app
init();
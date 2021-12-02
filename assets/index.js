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
        {   type: 'input',
            name: 'installation',
            message: 'What needs to be installed?',
        },
        {   type: 'input',
            name: 'usage',
            message: 'What is the usage of the program?',

        },
        {   type: 'input',
            name: 'contributers',
            message:'Who contributed to this project?',

        },
        {   type: 'input',
            name: 'contact',
            message: 'What is your email?',

        },
        {   type: 'input',
            name: 'website',
            message:'What is the link to the deployed program?'

        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license.',
            choices: [ 'Apache 2.0', 'BSD3', 'MIT', 'None'],
        },
        
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
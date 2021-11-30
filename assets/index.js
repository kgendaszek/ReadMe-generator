// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 
        }
    ]

// TODO: Create a function to write README file
function writeToFile(project, data) {

};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers)=>fs.writeFileSync('README.md', generateRead(answers)))
    .then(()=> console.log("Generated README"))
    .catch((err)=> console.error(err));
};

// Function call to initialize app
init();
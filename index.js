var fs = require('fs');
const sequelize = require('sequelize');
const inquirer = require('inquirer');
const cTable = require('console.table');
console.table([
  {
    name: 'foo',
    age: 10
  }, {
    name: 'bar',
    age: 20
  }
]);


// prompts
function init() {
  inquirer
    .prompt([
      {
        type: 'choices',
        name: 'selectChoices',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
      },
    ])
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(["Couldn't be rendered in the current environment"]);
        // Prompt couldn't be rendered in the current environment
      } else {
        console.log(["Something else went wrong"]);
        // Something else went wrong
      }
    });
}


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => console.log(err))
};

init();
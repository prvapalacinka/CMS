var fs = require('fs');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');


const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'golaco',
  database: 'CMS'
});


// prompts
function init() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selectChoices',
        message: "Please select one of these:",
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
      },
    ])
    .then((answers) => {
      if (answers.selectChoices == 'view all departments') {
        connection.query(
          'SELECT * FROM department',
          function (err, results, fields) {
            console.table(results); // results contains rows returned by server
            init();
          }
        )
      }
      else if (answers.selectChoices == 'view all roles') {
        connection.query(
          'SELECT * FROM role',
          function (err, results, fields) {
            console.table(results); // results contains rows returned by server
            init();
          }
        )
      }
      else if (answers.selectChoices == 'view all employees') {
        connection.query(
          'SELECT * FROM employee',
          function (err, results, fields) {
            console.table(results); // results contains rows returned by server
            init();
          }
        )
      };
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
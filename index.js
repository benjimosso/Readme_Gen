const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
            type: 'input',
            message: 'What is the name of your project: ',
            name: 'ProjName'
        },
        {
            type: 'input',
            message: 'how would you describe your project: ',
            name: 'description'
        },
        {
            type: 'input',
            message: 'describe installallation process: ',
        }
    ])

.then((data) => {
    // console.log(data)
    test(data)
})

function test(data) {
    if
}
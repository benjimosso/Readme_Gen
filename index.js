const inquirer = require('inquirer');
const fs = require('fs');

const questions = [{
        type: 'input',
        message: 'What is the name of your project: ',
        name: 'ProjName'
    },
    {
        type: 'input',
        message: 'Weite a short description about your prject: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is your Github Username: ',
        name: 'githubuser'
    },
    {
        type: 'input',
        message: 'Waht is your Email address: ',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies:  ',
        name: 'installation_commands',
    },
    {
        type: 'input',
        message: 'What command should be run to run test:  ',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What does user needs to know about using the repo:  ',
        name: 'repo_usage',
    },
    {
        type: 'input',
        message: 'What does user needs to know about contributing to the repo:  ',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'What is your project license',
        choices: ['MIT', 'GNU GPL v3', 'Mozilla Public License 2.0', ],
        name: 'License'
    },

]

inquirer.prompt(questions).then((data) => {
    if (data.License === 'Mozilla Public License 2.0') {
        data.License = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    if (data.License === 'GNU GPL v3') {
        data.License = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else {
        data.License = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    console.log(data.License)

    const README = `# License
    ${data.License}`

    fs.writeFile('READMETEST.md', README, (err) =>
        err ? console.log(err) : console.log('Success!')
    );


})
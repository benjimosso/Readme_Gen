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
        choices: ['MIT', 'GNU GPL v3', 'ISC', ],
        name: 'License'
    },

]

inquirer.prompt(questions).then((data) => {
    let LIC = data.License

    if (data.License === 'ISC') {
        data.License = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }
    if (data.License === 'GNU GPL v3') {
        data.License = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    if (data.License === 'MIT') {
        data.License = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }

    const README = `
# **${data.ProjName}**
## License
${data.License}
## Description
${data.description}
## Table Of Contents
1. [ Installation. ](#installation)
2. [ Usage tips. ](#usage)
3. [ License. ](#license)
4. [ Contributing ](#contributing)
5. [ Test ](#test)
6. [ Questions. ](#questions)

<a name="installation"></a>
## Installation :computer:
**To install necesary dependencies, run the following command:**
\`\`\`
- ${data.installation_commands}
\`\`\`
<a name="usage"></a>
## Usage :green_book:
${data.repo_usage}
<a name="license"></a>
## License :scroll:
**This project is license under the ${LIC} license**
<a name="contributing"></a>
## Contributing :brain:
${data.contribution}
<a name="test"></a>
## Test :keyboard:
**To run tests, run the following command:**
\`\`\`
- ${data.test}
\`\`\`
<a name="questions"></a>
### Questions :raising_hand_man:
If you have any questions about the repo, open an issue or contact me  directly at ${data.email}. You can find more of my work at [GitHub}](https://github.com/${data.githubuser}/).
`

    fs.writeFile('READMEFINAL.md', README, (err) =>
        err ? console.log(err) : console.log('Success!')
    );


})
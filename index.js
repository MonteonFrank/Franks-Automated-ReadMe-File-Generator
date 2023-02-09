// TODO: Include packages needed for this application
//import generateMarkdown from './utils/generateMarkdown';
const inquirer = require('inquirer');
const fs = require('fs');
const licensegenerator = require('./utils/generateMarkdown');


//Global Variables
let projectitle = "";
let installation = "";
let description = "";
let usage = "";
let license = ""; 
let contribution = "";
let test = "";
let github = "";
let email = "";
let licensefunction = "";


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please write how to install the application:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please write a brief description for your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please provide usage information:',
        name: 'usage',
      },
    {
      type: 'list',
      message: 'Please provide  the license used:',
      name: 'license',
      choices: ['MIT', 'GPLV3', 'GPLV2', 'Other'],
      },
      {
        type: 'input',
        message: 'Please provide a contribution guideline:',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Please provide a small description of Tests:',
        name: 'tests',
      },
    {
      type: 'input',
      message: 'Please provide your Github Name:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please provide your email address:',
      name: 'email',
    }
    ]

    inquirer.prompt(questions)
        .then((answer) => { 
          

          projectitle = answer.title;
          installation = answer.installation
          description = answer.description;
          usage = answer.usage;
          license = answer.license;
          contribution = answer.contribution;
          test = answer.tests;
          github = answer.github;
          email = answer.email;

 

          licensefunction = licensegenerator.testlicense(license);
          console.log(licensefunction);
          writeToFile();

          
        }
    
    );


// TODO: Create a function to write README file
function writeToFile() {

  const HTML = `
  
# ${projectitle} ReadMe File

## Table of contents
1. [ Installation. ](#installation)
2. [ Description. ](#description)
3. [ Usage. ](#usage)
4. [ License. ](#license)
5. [ Contribution. ](#contribution)
6. [ Test. ](#test)
7. [ Questions ](#questions)

<a name="installation"></a>
## Installation
${installation}

<a name="description"></a>
## Description
${description}

<a name="license"></a>
## License
${license}
${licensefunction}

<a name="usage"></a>
## Usage
${usage}

<a name="contribution"></a>
## Contribution
${contribution}

<a name="test"></a>
## Test
${test}

<a name="questions"></a>
## Questions
In case of questions please contact me through:
> * Github: [${github}](https://github.com/${github})
> * Email: [${email}](mailto:${email})` 
  

  fs.writeFile("ReadMeGenerator.md", HTML, (err) => err ? console.error(err) : console.log('Success, ReadMe file created!'));

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



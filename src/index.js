// import inquirer and fs
const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "what is the name of your project?",
    name: "title",
  },
  {
    type: "list",
    message: "Please select the content you would like to go to:",
    name: "content",
    choices: [
      "Description",
      "Instillation",
      "Usage",
      "License",
      "Contribution",
      "Tests",
      "Contact Me",
    ],
  },
  {
    type: "input",
    message: "Please enter your project description?",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter your project installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter your project usage information?",
    name: "usage",
  },
  {
    type: "list",
    message: "Please choose your project license from list ?",
    name: "license",
    choices: [
      "Apache2.0",
      "GNU Public v3.0",
      "MIT",
      "Boost Software 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public 2.0",
      "GNU Affero General Public v3.0",
      "GNU General Public v2.0",
      "GNU Lesser General Public v2.1",
      "Mozilla Public 2.0",
      "No license",
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter your project contribution guidelines.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter test instructions.",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your Github Username.",
  },

  {
    type: "input",
    name: "email",
    message: "Please enter your email address.",
  },
];

const init = async () => {
  const answers = await inquirer.prompt(questions);
  //display answers
  console.log(answers);
  //call generate read me
  const generatedMD = generateReadMD(answers);
  console.log(generatedMD);
  // now that we have the readme text,
  // we want to create a new readme file and add this text to it

  fs.writeFileSync("./Osman.md", generatedMD);
};

const generateReadMD = (answers) => {
  return `# Projects
        ${answers.title}

        ## Table Of Contents
        ${answers.content}

        ## Description
        ${answers.description}

        ## Instillation
        ${answers.installation}

        ## Usage
        ${answers.usage}

        ## License
        ${answers.license}

        ## Contribution
        ${answers.contribution}

        ## Tests
        ${answers.test}

        ## Contact Me
        ${answers.github}

        ## Contact Me
        ${answers.email}`;
};

init();

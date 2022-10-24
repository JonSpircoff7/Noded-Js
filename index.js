const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What would you like the name of your Project to be?",
      name: "title",
      validate: async (value) => {
        if (value === "") {
          return "enter a valid response";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "How would you describe your project?",
      name: "description",
      validate: async (value) => {
        if (value === "") {
          return "enter a valid response";
        }
        return true;
      },
    },
    {
      type: "checkbox",
      message: "Table of Contents",
      name: "toc",
      choices: [
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Test",
        "Questions",
      ],
      default: [
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Test",
        "Questions",
      ],
    },
    {
      type: "input",
      message: "Does your project require installation?",
      name: "install",
      validate: async (value) => {
        if (value === "") {
          return "enter a valid response";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
      validate: async (value) => {
        if (value === "") {
          return "enter a valid response";
        }
        return true;
      },
    },
    {
      type: "list",
      message: "License",
      name: "license",
      choices: [
        "MIT",
        "AcademicFreeLicensev3.0",
        "Apache2.0License",
        "BSD3ClauseLicense",
        "AttributionShareAlike4.0International",
      ],
      validate: async (value) => {
        if (value === "") {
          return "enter a valid response";
        }
        return value.toLowerCase();
      },
    },
    {
      type: "input",
      message: "Contributing",
      name: "contributing",
      validate: async (value) => {
        if (value === "") {
          return "enter a valid response";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "How do we test your project",
      name: "test",
      validate: async (value) => {
        if (value === "") {
          return "enter a valid response";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Github username",
      name: "github",
      validate: async (value) => {
        if (value === "") {
          return "enter a valid response";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Email?",
      name: "email",
      validate: async (value) => {
        if (value === "") {
          return "enter a valid response";
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    console.log(answers);
    let markdown = `# ${answers.title} [![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
${answers.description}
## Table Of Contents 
- [${answers.toc[0]}](#${answers.toc[0]})
- [${answers.toc[1]}](#${answers.toc[0]})
- [${answers.toc[2]}](#${answers.toc[0]})
- [${answers.toc[3]}](#${answers.toc[0]})
- [${answers.toc[4]}](#${answers.toc[0]})
- [${answers.toc[5]}](#${answers.toc[0]})


## Install
 ${answers.install}
## Usage
${answers.usage}
## License
${answers.license}
## Contributing

${answers.contributing}

## Test

${answers.test}
## Questions

https://github.com/${answers.github}
${answers.email}`;

    fs.writeFile("README.md", markdown, (err) => {
      err ? console.log(err) : console.log("File written successfully\n");
    });
  });

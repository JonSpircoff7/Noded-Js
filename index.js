const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("markdown")
inquirer
  .prompt([
    {
      type: "input",
      message: "Project Title?",
      name: "title",
    },
    {
      type: "input",
      message: "Description of your project?",
      name: "description",
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
        "Tests",
        "Questions",
      ],
    },
    {
      type: "input",
      message: "Installation",
      name: "install",
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
    },
    {
      type: "list",
      message: "License",
      name: "license",
      choices: ["MIT", "Academic Free License v3.0"],
    },
    {
      type: "input",
      message: "Contributing",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests",
      name: "test",
    },
    {
      type: "input",
      message: "Github username",
      name: "github",
    },
    {
      type: "input",
      message: "Email?",
      name: "email",
    },
  ])
  .then((answers) => {
    console.log(answers);
    let readFile = `# ${answers.title}
${answers.description}
## Table Of Contents 
- [${answers.toc[0]}](#${answers.toc[0]})
- [${answers.toc[1]}](#${answers.toc[1]})
- [${answers.toc[2]}](#${answers.toc[2]})
- [${answers.toc[3]}](#${answers.toc[3]})
- [${answers.toc[4]}](#${answers.toc[4]})
- [${answers.toc[5]}](#${answers.toc[5]})


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

    fs.writeFile("README.md", readFile, (err) => {
      err ? console.log(err) : console.log("File written successfully\n");
    });
  });

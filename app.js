import inquirer from "inquirer";
// const fs = require("fs");
// const generatePage = require("./src/page-template");

// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", generatePage(name, github), (err) => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};

promptUser().then((answers) => console.log(answers));

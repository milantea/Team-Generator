const inquirer = require("inquirer");
const generateHTML = require("./src/pageTemplate.js");
const fs = require("fs");

const managerQuestions = [
  {
    type: "input",
    name: "manager-name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "manager-id",
    message: "What is the manager's ID?",
  },
  {
    type: "input",
    name: "manager-email",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "manager-officeNum",
    message: "What is the manager's office number?",
  },
];

const employeeQuestions = [
  {
    type: "list",
    name: "nextChoice",
    message: "What would you like do next?",
    choices: ["Add an Engineer", "Add an Intern", "Finished building team"],
    default: "Finished building team",
  },
  {
    type: "input",
    name: "engineerName",
    message: "Please enter engineer's name?",
    validate: (input) => {
      if (!input) {
        console.log("Please enter name.");
        return false;
      } else {
        return true;
      }
    },
    when: ({ nextChoice }) => {
      if (nextChoice === "Add an Engineer") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "engineerId",
    message: "Please enter engineer's id?",
    validate: (input) => {
      if (!input) {
        console.log("Please enter an id.");
        return false;
      } else {
        return true;
      }
    },
    when: ({ nextChoice }) => {
      if (nextChoice === "Add an Engineer") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Please enter engineer's email?",
    validate: (input) => {
      if (!input) {
        console.log("Please enter an email.");
        return false;
      } else {
        return true;
      }
    },
    when: ({ nextChoice }) => {
      if (nextChoice === "Add an Engineer") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "Please enter engineer's GitHub?",
    validate: (input) => {
      if (!input) {
        console.log("Please enter GitHub.");
        return false;
      } else {
        return true;
      }
    },
    when: ({ nextChoice }) => {
      if (nextChoice === "Add an Engineer") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "internName",
    message: "Please enter intern's name?",
    validate: (input) => {
      if (!input) {
        console.log("Please enter name.");
        return false;
      } else {
        return true;
      }
    },
    when: ({ nextChoice }) => {
      if (nextChoice === "Add an Intern") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "internId",
    message: "Please enter intern's id?",
    validate: (input) => {
      if (!input) {
        console.log("Please enter an id.");
        return false;
      } else {
        return true;
      }
    },
    when: ({ nextChoice }) => {
      if (nextChoice === "Add an Intern") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "internEmail",
    message: "Please enter intern's email?",
    validate: (input) => {
      if (!input) {
        console.log("Please enter an email.");
        return false;
      } else {
        return true;
      }
    },
    when: ({ nextChoice }) => {
      if (nextChoice === "Add an Intern") {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "internSchool",
    message: "Please enter intern's school?",
    validate: (input) => {
      if (!input) {
        console.log("Please enter school.");
        return false;
      } else {
        return true;
      }
    },
    when: ({ nextChoice }) => {
      if (nextChoice === "Add an Intern") {
        return true;
      } else {
        return false;
      }
    },
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("successfully written file to folder.");
  });
}

function addTeamMember(existingTeam) {
  console.log("inside addTeamMember function");
  if (!existingTeam.employees) {
    existingTeam.employees = [];
  }

  return inquirer.prompt(employeeQuestions).then((teamMember) => {
    if (additionalTeamMember.nextAction == "Finished building team") {
      // at this moment, the user has finished created their team, i.e. manager, engineers, and itnerns
      // go ahead and pass your manager and employee info to the generateHTMLfunction
      return generateHTML(); // pass in the appropriate arguments
    }

    existingTeam.employees.push(teamMember);
    return addTeamMember(existingTeam);
  });
}

function init() {
  inquirer.prompt(managerQuestions).then(addTeamMember);
  // .then((generateHTMLPage) => {
  //   let fileLocation =
  //     "/Users/milanteadams/MSU_Projects/Module_10_Challenge/generateHTML.html";
  //   writeToFile(fileLocation, generateHTMLPage);
  // });
}

// Function call to initialize app
init();

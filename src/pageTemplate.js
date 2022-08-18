const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

// const generateManagerInfo (managerObject) {

//     // returning raw html inside this function, passing in (i.e. interpolating) the managerObject
//     return
// }

// const generateEmployees (employeesArray) {
//     // returning raw html inside this function, passing in (i.e. interpolating) the employeesArray
// }

module.exports = (templateData) => {
  // you will destructure the mananger and employees from templateData this is my answers array that holds user input, read up on destructuring
  // i.e. const {managerName, managerId, managerEmail,, ...employees} = templateData; my template data is answers array, pulling manager email, id

  // const manager = new Manager(
  //   managerName,
  //   managerId,
  //   managerEmail,
  //   managerOfficeNum
  // );

  return `
  <body>
  <div class="container">
    <h2>Employee Name</h2>
    <h3>Employee Role</h3>
    <ul class="employee-info">
      <li class="id">ID:</li>
      <a href="#">Employee Id</a>
      <li class="email">Email:</li>
      <a href="#">Email</a>
      <li class="github">GitHub:</li>
      <a href="#">Github</a>
      <li class="officeNum">Office Number:</li>
      <a href="#">Office Number</a>
    </ul>
  </div>
</body>

    // ${generateManagerInfo(manager)}
    // ${generateEmployees(employees)}
    `;
};

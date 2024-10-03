// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// // Collect employee data
// const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
// }
const collectEmployees = function() {
    const employees = []; // Initialize an empty array to hold employee objects
    let addingEmployees = true; // Control variable for the while loop

    while (addingEmployees) {
        // Collect employee details using prompt
        const firstName = prompt("Enter the employee's first name:");
        const lastName = prompt("Enter the employee's last name:");
        let salary = prompt("Enter the employee's salary:");

        // Convert salary to a number and default to 0 if it's not a number
        salary = isNaN(salary) ? 0 : Number(salary);

        // Create an employee object and push it to the employees array
        employees.push({
            firstName: firstName,
            lastName: lastName,
            salary: salary
        });

        // Ask the user if they want to add another employee
        addingEmployees = confirm("Would you like to add another employee?");
    }

    return employees; // Return the array of employee objects
}

const displayAverageSalary = function(employeesArray) {
    if (employeesArray.length === 0) {
        console.log("No employees to calculate the average salary.");
        return;
    }
    let totalSalary = 0; // Initialize a variable to hold the total salary
    // Loop through the employees array to sum the salaries
    for (let employee of employeesArray) {
        totalSalary += employee.salary; // Add each employee's salary to totalSalary
    }
    const averageSalary = totalSalary / employeesArray.length; // Calculate the average salary
    const numberOfEmployees = employeesArray.length; // Get the number of employees
    // Log the average salary to the console with two decimal places
    console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalary.toFixed(2)}`);
}

const getRandomEmployee = function(employeesArray) {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    // Select the random employee
    const randomEmployee = employeesArray[randomIndex];
    // Log the message
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}
// // // Display the average salary
// // const displayAverageSalary = function(employeesArray) {
// //   // TODO: Calculate and display the average salary

// // if (employeesArray.length === 0) {
// //     console.log("No employees to calculate the average salary.");
// //     return;
// // }
// // let totalSalary = 0; // Initialize a variable to hold the total salary
// // // Loop through the employees array to sum the salaries
// // for (let employee of employeesArray) {
// //     totalSalary += employee.salary; // Add each employee's salary to totalSalary
// }


// const averageSalary = totalSalary / employeesArray.length; // Calculate the average salary
// const numberOfEmployees = employeesArray.length; // Get the number of employees
// // Log the average salary to the console with two decimal places
// console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalary.toFixed(2)}`);
// } (edited) 
// // Select a random employee
// const getRandomEmployee = function(employeesArray) {
//   // TODO: Select and display a random employee
//   const getRandomEmployee = function(employeesArray) 
//     // Generate a random index
//     const randomIndex = Math.floor(Math.random() * employeesArray.length);
//     // Select the random employee
//     const randomEmployee = employeesArray[randomIndex];
//     // Log the message
//     console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
// }


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

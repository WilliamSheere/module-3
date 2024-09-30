// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
function collectEmployees() {
	const employees = [];
	let continueAdding = true;
	while (continueAdding) {
		const firstName = prompt("Employee's first name:");
		const lastName = prompt("Employee's last name:");
		const salary = parseFloat(prompt("Employee's salary:"));
		const userResponse = prompt(
			"Do you want to add another employee? (yes/no)"
		);
		continueAdding = userResponse === "yes";
		const newEmployee = { firstName, lastName, salary };
		employees.push(newEmployee);
	}

	// TODO: Get user input to create and return an array of employee objects
	const newEmployee = {firstName, lastName, salary};
	employees.push(newEmployee);
}
// Display the average salary
const displayAverageSalary = function (employeesArray) {
	if (employeesArray.length === 1) {
		console.log("No employees to calculate the average salary.");
		return;
	}
};
const getRandomEmployee = function (employeesArray) {
	if (employeesArray.length === 1) {
		console.log("No employees available.");
		return;
	}
	console.log(
		"Congratulations to <employeeFirstName> <employeeLastName>, our random drawing winner!"
	);
	const randomIndex = Math.floor(Math.random() * employeesArray.length);
	const randomEmployee = employeesArray[randomIndex];
	const employees = [
		new Employee("John", "Doe", 50000),
		new Employee("Jane", "Smith", 60000),
		new Employee("Emily", "Johnson", 55000),
	];
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
	// Get the employee table
	const employeeTable = document.querySelector("#employee-table");

	// Clear the employee table
	employeeTable.innerHTML = "";

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
		salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		});

		newTableRow.append(salaryCell);

		employeeTable.append(newTableRow);
	}
};

const trackEmployeeData = function () {
	const employees = collectEmployees();

	console.table(employees);

	displayAverageSalary(employees);

	console.log("==============================");

	getRandomEmployee(employees);

	employees.sort(function (a, b) {
		if (a.lastName < b.lastName) {
			return -1;
		} else {
			return 1;
		}
	});

	displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);

let editButton = document.getElementById("editButton");
let deleteButton = document.getElementById("deleteButton");
let submitButton = document.getElementById("sub");
let table = document.querySelector("table");
let searchInput = document.getElementById("search");

let nameInput = document.querySelector("#employeeName");
let ageInput = document.querySelector("#employeeAge");
let salaryInput = document.querySelector("#employeeSalary");

// Add button
submitButton.addEventListener("click", () => {
  let newTable = document.getElementById("tableBody");
  let name = nameInput.value;
  let age = ageInput.value;
  let salary = salaryInput.value;
  let tableRow = document.createElement("tr");
  let rows = document.querySelectorAll("tbody tr");
  tableRow.setAttribute("id", rows.length - 1);

  let tableName = document.createElement("td");
  let tableAge = document.createElement("td");
  let tableSalary = document.createElement("td");
  let tableEdit = document.createElement("td");
  let tableDelete = document.createElement("td");

  tableName.innerHTML = name;
  tableAge.innerHTML = age;
  tableSalary.innerHTML = salary;

  tableRow.append(tableName);
  tableRow.append(tableAge);
  tableRow.append(tableSalary);
  tableRow.append(tableEdit);
  tableRow.append(tableDelete);
  newTable.append(tableRow);

  let newEditButton = document.createElement("button");
  newEditButton.textContent = "Edit";
  tableEdit.appendChild(newEditButton);
  newEditButton.setAttribute("id", rows.length + 1);
  newEditButton.addEventListener("click", () => {
    nameInput.value = name;
    ageInput.value = age;
    salaryInput.value = salary;

    // Save button
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    tableEdit.appendChild(saveButton);
    saveButton.addEventListener("click", () => {
      let updatedName = nameInput.value;
      let updatedAge = ageInput.value;
      let updatedSalary = salaryInput.value;

      tableName.innerHTML = updatedName;
      tableAge.innerHTML = updatedAge;
      tableSalary.innerHTML = updatedSalary;

      // Remove save button
      saveButton.remove();
    });
  });

  let newDeleteButton = document.createElement("button");
  newDeleteButton.textContent = "Delete";
  tableDelete.appendChild(newDeleteButton);
  newDeleteButton.setAttribute("id", rows.length + 11);
  newDeleteButton.addEventListener("click", () => {
    tableRow.remove();
  });
});

//Search bar
searchInput.addEventListener("input", () => {
  let searchValue = searchInput.value.toLowerCase();
  let rows = table.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    let rowData = row.textContent.toLowerCase();
    if (rowData.includes(searchValue)) {
      //Sync the searched data
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
});

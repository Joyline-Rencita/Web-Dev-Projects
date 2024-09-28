function addRow() {
    // Get the table
    let table = document.getElementById("dynamic-table").getElementsByTagName('tbody')[0];
    
    // Get input values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let country = document.getElementById("country").value;

    // Insert a new row at the end of the table
    let newRow = table.insertRow();

    // Insert cells in the row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6); // New column for Delete button

    // Add values to the cells
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = email;
    cell4.innerHTML = mobile;
    cell5.innerHTML = country;

    // Add a delete button in the last cell
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        deleteRow(this);
    };
    cell7.appendChild(deleteBtn);

    // Clear input fields after adding the row
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("country").value = "";
}

// Delete the row when the Delete button is clicked
function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

var selectedRow = null;

function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewProduct(formData);
    }else{
        updateRecord(formData);
    }
    resetForm();
}

//retrieve the data
function readFormData(){
    var formData = {};
    formData["username"] = document.getElementById("Username").value;
    formData["dob"] = document.getElementById("Dob").value;
    formData["email"] = document.getElementById("Email").value;
    formData["age"] = document.getElementById("Age").value;
    console.log(formData);
    return formData;
}

//Insert data
function insertNewProduct(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.username;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.dob;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.email;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.age;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button>  <button onClick='onDelete(this)'>Delete</button>`   
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Username').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Dob').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Email').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Age').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.dob;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.age;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('Username').value = '';
    document.getElementById('Dob').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Age').value = '';
}

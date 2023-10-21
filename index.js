var selectedRow = null;
function onformSubmit(e){
    event.preventDefault();
    var formData = readformData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData);

    }
    resetForm();
}
//Retrieve the data
function readformData(){
    var formData = {};
    formData["subject"] = document.getElementById("subject").value;
    formData["day"] = document.getElementById("day").value;
    formData["time"] = document.getElementById("time").value;
    formData["room"] = document.getElementById("room").value;
    formData["instructor"] = document.getElementById("instructor").value;
    return formData;
}
//insert the data
function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.subject;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.day;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.time;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.room;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.instructor;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<a href="#" onCLick='onEdit(this)'>Update</a>
                            <a href="#" onCLick='onDelete(this)'>Delete</a`;
}
//edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('subject').value = selectedRow.cells[0].innerHTML;
    document.getElementById('day').value = selectedRow.cells[1].innerHTML;
    document.getElementById('time').value = selectedRow.cells[2].innerHTML;
    document.getElementById('room').value = selectedRow.cells[3].innerHTML;
    document.getElementById('instructor').value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.subject;
    selectedRow.cells[1].innerHTML = formData.day;
    selectedRow.cells[2].innerHTML = formData.time;
    selectedRow.cells[3].innerHTML = formData.room;
    selectedRow.cells[4].innerHTML = formData.instructor;
}
//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record')){
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
    }
    resetForm();
}
//Reset the Data
function resetForm(){
    document.getElementById('subject').value = '';
    document.getElementById('day').value = '';
    document.getElementById('time').value = '';
    document.getElementById('room').value = '';
    document.getElementById('instructor').value = '';
}

//Search  Data
function onSearch() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("storelist");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


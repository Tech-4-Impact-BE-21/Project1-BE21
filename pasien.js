const 
  myForm = document.forms['my-form']  // form name pada tag html form
, table  = document.querySelector('#myTable tbody')
, dataArr = JSON.parse(localStorage.getItem('dataArr') || '[]');

var selectedRow = null
var number = 0

// Tabel init
dataArr.forEach(row=>{
    let newRow = table.insertRow()

    newRow.insertCell().textContent = row.no = ++number
    newRow.insertCell().textContent = row.inputNL
    newRow.insertCell().textContent = row.inputJK
    newRow.insertCell().textContent = row.inputNH
    newRow.insertCell().textContent = row.inputA 
    newRow.insertCell().innerHTML = `<a onClick="onDelete(this)"><i class="fas fa-times"></i></a>`
})

function onFormSubmit() {
    if (validate()) {
        if (selectedRow == null) {
            // Menambahkan entri ke LocalStorage :
            dataArr.push(Object.fromEntries(new FormData(myForm).entries()))
            localStorage.setItem('dataArr', JSON.stringify( dataArr ))
            
            // Memasukkan Data pada Baris Baru
            let newRow = table.insertRow()
            
            newRow.insertCell().textContent = myForm.no.value = ++number
            newRow.insertCell().textContent = myForm.inputNL.value
            newRow.insertCell().textContent = myForm.inputJK.value
            newRow.insertCell().textContent = myForm.inputNH.value
            newRow.insertCell().textContent = myForm.inputA.value
            newRow.insertCell().innerHTML = `<a onClick="onDelete(this)"><i class="fas fa-times"></i></a>` 
        } 
        resetForm();
    }
}

// Function untuk Mereset Data yang sudah diSumbit di dalam Input
function resetForm() {
    document.getElementById("no").value = "";
    document.getElementById("inputNL").value = "";
    document.getElementById("inputJK").value = "Pria";
    document.getElementById("inputNH").value = "";
    document.getElementById("inputA").value = "";
    selectedRow = null;
}

// Function untuk Delete Data
function onDelete(td) {
    if (confirm('Apa kamu yakin ingin Menghapus Data ini?')) {
        row = td.parentElement.parentElement;
        document.getElementById("myTable").deleteRow(row.rowIndex);
        resetForm();
    }
    hapusDataLocal(td.parentElement.parentElement)
}

function hapusDataLocal(dataItem) {    
    dataArr.forEach(function(task, index) {
        if (dataItem.textContent === task ) {            
            dataArr.splice(index, 1);
        }
    });
    localStorage.setItem(dataArr, JSON.stringify(dataArr))
}

// Function untuk Memvalidasi Data
function validate() {
    isValid = true;
    if (document.getElementById("inputNL").value == "" || document.getElementById("inputJK").value == "" || document.getElementById("inputNH").value == "" || document.getElementById("inputA").value == "") {
        isValid = false;
        alert("Isi Semua Formnya dengan Benar!");
    } 
    return isValid;
}
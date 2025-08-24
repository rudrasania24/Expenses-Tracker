const form = document.querySelector('form');
const table = document.querySelector('table');


form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Get values from input fields
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    if(name === "" || amount === "" || date === "") {
        alert("Please fill in all fields!");
        return;
    }


    const newRow = table.insertRow();

    
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = name;
    cell2.textContent = amount;
    cell3.textContent = date;

    
    form.reset();
});
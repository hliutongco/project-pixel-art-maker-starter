let colorInput = document.getElementById('colorPicker');
let heightInput = document.getElementById('inputHeight');
let widthInput = document.getElementById('inputWeight');
let sizeForm = document.getElementById('sizePicker');
let table = document.getElementById('pixelCanvas');

function makeGrid(event) {
  //deletes any pre-existing table
  while(table.rows.length>0) {
    table.deleteRow(0);
  }
  //prevents any form submit weirdness
  event.preventDefault();

  //builds the table based on input
  for(let counter = 0; counter < heightInput.value; counter++) {
    let row = table.insertRow(table.rows.length);
    for(let counter = 0; counter < widthInput.value; counter++) {
        let cell = row.insertCell(0);
    }
  }
}

//users color input to change the input of the clicked cell
//the clicked cell is event.path[0]
function colorCell(event) {
  event.path[0].style.backgroundColor = colorInput.value;
}

sizeForm.addEventListener('submit', makeGrid);
table.addEventListener('click', colorCell);

function init() {
  document
    .getElementById('fileInput')
    .addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event) {
  const reader = new FileReader();
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0]);
}

function handleFileLoad(event) {
  console.log(event);
  console.log(event.target.result);
  successFunction(event.target.result);
}

function successFunction(data) {
  const allRows = data.split(/\r?\n|\r/);
  let table = '<table>';
  console.log(allRows);
  // const table = document.createElement('table');
  console.log(table);
  // const thead = document.createElement('thead');
  for (let singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    const rowCells = allRows[singleRow].split(',');
    console.log(rowCells);
    for (let rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  }
  table += '</tbody>';
  table += '</table>';
  $('body').append(table);
  const filecontent = document.querySelector('#fileContent');
  console.log(filecontent);
  filecontent.append(table);
}

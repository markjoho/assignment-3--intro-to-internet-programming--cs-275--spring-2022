window.onload = () => {
  let createMatrix = (input) => {
    let size = input*input;
    let array = new Array(size);

    for (let i = 0; i < size; i++) {
      array[i] = i+1;
    }

    return array;
  };

  let createReverseMatrix = (input) => {
    let size = input*input;
    let check = input-1;
    let flippedArray = new Array(size);

    for (let i = 0; i < size; i++) {
      if (i%check == 0 && i != 0 && i != size-1) {
        flippedArray[i] = i+1;
      } else {
        flippedArray[i] = size-i;
      }
    }

    return flippedArray;
  };

  let showMatrix = (array, input, name) => {
    let output = name;
    let size = array.length;
    let check = input-1;
    output += `<table>`;
    output += `<tr>`;
    for (let i = 0; i < size; i++) {
      if (i%check == 0 && i != 0 && i != size-1) {
        output += `<td class = axis>` + array[i] + `</td>`;
      } else {
        output += `<td class = normal>` + array[i] + `</td>`;
      }
      if ((i+1)%input == 0) {
        output += '</tr>';
      }
    }
    output +=`</table>`;
    return output;
  };

  document.getElementById(`matrix`).style.visibility = `visible`;
  let input = 1;
  while (input < 2) {
    input =
    window.prompt(`What size is your square matrix:`, ``);
    input = parseInt(input, 10);
    if (!Number.isInteger(input)) {
      alert(`Invalid. The input must be an integer that greater than 1`);
      input = 1;
    } else {
      input = parseInt(input, 10);
      if (input < 2) {
        alert(`Invalid. Integer less than 2 is not allowed.
          The input number must greater than 1`);
      }
    }
  }
  let matrixArray = createMatrix(input);
  let matrixFlippedArray = createReverseMatrix(input);
  let matrixOutput = showMatrix(matrixArray, input, `<h2>Original Matrix</h2>`);
  matrixOutput += showMatrix(matrixFlippedArray, input, `<h2>Flipped Matrix</h2>`);
  document.getElementById(`matrix`).innerHTML = matrixOutput;
};

const input = require("readline-sync");

let array = input.question("Array: ").split(" ");
let position = input.question("Number: ");

// Pós -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Array -> [2, 8, 10, 15, 7, 22, 7, 9, 12, 7, 12, 4]

// position -> 7

function getPosition(array, position) {
  const arrayNums = array.map((num) => parseInt(num));
  let numEntries = arrayNums.entries();
  let getPositions = [];
  let message;

  for (let i = 0; i <= arrayNums.length; i++) {
    let getIndexes = numEntries.next().value;

    if (getIndexes && getIndexes[1] === parseInt(position)) {
      getPositions.push(getIndexes[0]);
    }
  }

  if (arrayNums.length < position) {
    message = "Número não existe dentro do array";
  }

  return {
    firstPosition: getPositions.shift(),
    lastPosition: getPositions.pop(),
    message: message,
  };
}

console.log(getPosition(array, position));

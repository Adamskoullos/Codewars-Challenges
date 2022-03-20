/*
High level problem:

Take in a matrix board and string and return the number of times the string word is present in the board.

Including:

1. -> Horizontally
2. Vertical top-to-bottom
3. Diagonally top-left-to-bottom-right

Break problem down:

1. Match horizontally

2. Match vertically

3. Match diagonally

*/ // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log("Testing !!");

const board = [
  ["d", "f", "w", "t", "t"],
  ["t", "o", "m", "t", "o"],
  ["d", "o", "t", "o", "m"],
  ["d", "f", "m", "t", "e"],
];

const word = "tom";

const findAllMatches = (board, word) => {
  const rows = board.length;
  const cols = board[0].length;
  const reg = new RegExp(word, "g");
  let result = 0;

  // Find horizontal matches
  board.map((row) => {
    let matches = row.join("").match(reg);
    if (matches) {
      result = result + matches.length;
    }
  });

  // Find vertical matches
  for (let col = 0; col < cols; col++) {
    let vertical = [];
    board.map((row) => vertical.push(row[col]));
    let matches = vertical.join("").match(reg);
    if (matches) {
      result = result + matches.length;
    }
  }

  // Find diagonal matches in top right triangle
  for (let col = 0; col < cols; col++) {
    let diagonal = [];
    board.map((row, index) => {
      diagonal.push(row[col + index]);
    });
    let matches = diagonal.join("").match(reg);
    if (matches) {
      result = result + matches.length;
    }
  }

  // Find diagonal matches in bottom left triangle
  for (let row = 1; row < rows; row++) {
    let diagonal = [];
    for (let col = 0; col < cols; col++) {
      if (!board[row + col]) break;
      diagonal.push(board[row + col][col]);
    }
    let matches = diagonal.join("").match(reg);
    if (matches) {
      result = result + matches.length;
    }
  }

  return result;
};

const result = findAllMatches(board, word);

console.log(result);
// Should find: 4 matches

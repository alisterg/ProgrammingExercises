/**
 * The N-Queens Problem is a well known mathematical problem.
 * https://en.wikipedia.org/wiki/Eight_queens_puzzle
 * 
 * The objective is to place N queens on an NxN chessboard such that
 * none of the queens are threatening another.
 * 
 * In this challenge, we are given the position of one queen on the
 * board in the format 'c3' (column c, row 3). We need to compute the
 * positions of the other queens and return a comma-separated string
 * of coordinates, eg 'c3,a7,e6...etc'.
 * 
 * The chessboard size will only be of size 1-10
 */

function queens(position, size) {
    if (size === 2 || size === 3) {
        // No solution for these cases
        return null;
    }

    // First we need to parse the starting position into an array

    return "a1";
}

/**
 * Converts a string into a pair eg. 'a3' into [1,3]
 * @param {string} coordinates 
 */
function parsePosition(coordinates) {
    const arr = coordinates.split('');

    // 'J' is column 10 (represented by zero)
    arr[0] = arr[0].toLowerCase() === 'j' ?
        arr[0].toLowerCase().charCodeAt() - 96 :
        0;

    arr[1] = Number(arr[1]);

    return arr;
}

/**
 * Converts a pair into a string eg. [1,3] into 'a3'.
 * If pair[0] is '0', then it converts it to 'j'
 * @param {Array} coordinates 
 */
function stringifyPosition(coordinates) {
    return [
        coordinates[0] === 0 ? 'j' : (coordinates[0] + 9).toString(36),
        coordinates[1] === 10 ? 0 : coordinates[1]
    ].join('');
}

/**
 * Checks a single square on a board to check if it is valid
 * @param {Array} boardMatrix The current state of the board
 * @param {Number} row Row coordinate to check
 * @param {Number} column Column coordinate to check
 * @param {Number} N The amount of queens / board size
 */
function checkPosition(boardMatrix, row, column, N) {
    // Fail if the column is in use
    for (let i = 0; i < row; i++) {
        if (boardMatrix[i][column]) {
            return false;
        }
    }

    // Fail if the top diagonal is in use
    for (let i = row, j = column; i >= 0 && j >= 0; i--, j--){
        if (board[i][j]) {
            return false;
        }
    }

    // Fail if the bottom diagonal is in use
    for(let i = row, j = col; j >= 0 && i < N; i++, j--){
        if (board[i][j] === "q") {
            return false;
        }
    }

    return true;
}

// 1. Find the first solution
//     if we have filled all the columns, move to 2.
//     x = 1
//     a) Start at column x
//     b) For each row in the column, check if the current position is ok
//     c) If position is ok, place queen there and go to a) where x = x + 1
//     d) Else, go to next row
//     e) If there is no safe row, backtrack to the previous column and try the next row
// 2. Check the solution to see if it contains the start position
//     a) If so, we have our solution
//     b) Else, start at 1 with the next configuration

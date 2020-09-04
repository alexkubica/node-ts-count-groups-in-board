"use strict";

const N = 5;
const FULL_CELL_PROBABILITY = 0.3;
enum Cell {
    Empty = 0,
    Full = 1
};

function countFullGroups(board: Cell[][]) {
    const n = board.length;
    let visitedCellFlags = initVisitedCellFlags(n);
    let groupCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visitedCellFlags[i][j] && board[i][j] === Cell.Full) {
                visitCells(board, visitedCellFlags, i, j);
                groupCount++;
            }
        }
    }

    return groupCount;
}

function initVisitedCellFlags(n: number): boolean[][] {
    return Array.from({
        length: n
    }, () => new Array(n).fill(false));
}

function visitCells(board: Cell[][], visitedCellFlags: boolean[][], i: number, j: number) {
    const n = board.length;
    if (i < 0 || i >= n || j < 0 || j >= n || board[i][j] === Cell.Empty || visitedCellFlags[i][j]) {
        return;
    }

    visitedCellFlags[i][j] = true;
    visitCells(board, visitedCellFlags, i + 1, j);
    visitCells(board, visitedCellFlags, i - 1, j);
    visitCells(board, visitedCellFlags, i, j + 1);
    visitCells(board, visitedCellFlags, i, j - 1);
}

function createRandomBoard(n: number): Cell[][] {
    let m = [];
    for (let i = 0; i < n; i++) {
        m.push([]);
        for (let j = 0; j < n; j++) {
            m[i].push(Math.random() <= FULL_CELL_PROBABILITY ? Cell.Full : Cell.Empty);
        }
    }

    return m;
}

let b = createRandomBoard(N);
console.log('created board:')
console.log(b);
console.log(`found ${countFullGroups(b)} groups in board`);
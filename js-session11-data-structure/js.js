// bad example of data structure because javascript does not know the orders 
let object = {
    firstRow: {
        firstColumn: {col: 1, row: 1, value: 'x'},
        secondColumn: {col: 2, row: 1, value: null},
        thirdColumn: null
    },
    secondRow: {
        firstColumn: 'x',
        secondColumn: null,
        thirdColumn: null
    },
    thirdRow: {
        firstColumn: 'x',
        secondColumn: null,
        thirdColumn: null
    }
}
console.log(object)

// always use arrays so javascript can know the data structure 
// this is a good data structure because so you can easily index these values 
// this is perfect, everything is structured well and well organised
let board = [
    ['x', 'xy1', null],
    [null, 'xy2', null],
    [null, 'xy3', 'xyz']
]
console.log(board[0][0])
console.log(board[1][1])
console.log(board[0][1])
console.log(board[2][1]) // y, x

let winnerCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

console.log(winnerCombos)
console.log(winnerCombos[1][0])
console.log(winnerCombos[1][1])
console.log(winnerCombos[1][2])
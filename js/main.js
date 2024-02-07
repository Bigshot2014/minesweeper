'use strict'

const SAFE = 'S'
const MINE = '💣'
const FLAG = '🏁'


var countMines = 0


var gBoard
var gLevel = {
    SIZE: 4,
    MINES: 2

}

function onInit() {
    gBoard = createBoard()
    setMinesNegsCount(gBoard)
    renderBoard(gBoard)
}


function createBoard() {
    const size = gLevel.SIZE
    const board = []
    for (let i = 0; i < size; i++) {
        board[i] = []
        for (let j = 0; j < size; j++ ) {
            board[i][j] = SAFE
        }
    }

    // //placing mines
    board[2][3] = MINE
    board[1][2] = MINE


    return board
}


function renderBoard() {
    var strHTML = ''
    for (let i = 0; i < gBoard.length; i++) {
        strHTML += `<tr>\n`
        for (let j = 0; j < gBoard[0].length; j++) {
            const cell = gBoard[i][j]

            var className = (cell === 'S')? 'safe' : ''

            strHTML += `<td class="cell ${className}"
             onClick="cellClicked(this, ${i}, ${j}")>${cell}</td>\n`
        }
        strHTML += `</tr>\n`
    }
    const elCells = document.querySelector('.minesweeper-cells')
    elCells.innerHTML = strHTML
    console.log('hi')


    // dom
    //neg count
    const elNegs = document.querySelector('.neg-count span')
    elNegs.innerHTML = countMines

    //mines count
    const elMines = document.querySelector('.mines-count span')
    elMines.innerHTML = gLevel.MINES

}

function setMinesNegsCount(rowIdx, colIdx, board) {

    for (let i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue

        for (let j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= board[0].length) continue

            var currCell = board[i][j]

            if (currCell === MINE) countMines++
        }
    }
    console.log('countMines:', countMines) 
    return countMines


}

function onCellClicked(elCell, i, j) {
    const cell =gBoard[i][j]

    console.log('Cell Clicked: ', elCell, i, j)
    
    const minesCount = setMinesNegsCount(i, j, gBoard)
    console.log('number of neg mines: ', minesCount)
    
}











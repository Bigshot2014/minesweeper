'use strict'

const SAFE = 'S'
const MINE = '💣'
const FLAG = '🏁'


var minesNegsCount = 0


var gBoard = {
    minesAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: false
}


var gLevel = {
    SIZE: 4,
    MINES: 2

}

var gGame


function onInit() {

    resetTimer()

    gGame = {
        isOn: true,
        shownCount: 0,
        markedCount: 0,
        secsPassed: 0
    }

    gBoard = createBoard()
    setMinesNegsCount(gBoard)
    renderBoard(gBoard)
    startTimer()


}

function createBoard() {
    const size = gLevel.SIZE
    const board = []
    for (let i = 0; i < size; i++) {
        board[i] = []
        for (let j = 0; j < size; j++) {
            board[i][j] = SAFE
        }
    }


    var numOfMines = gLevel.MINES

    for (let i = 0; i < numOfMines; i++) {
        var randRow = getRandomIntInclusive(0, size - 1)
        var randCol = getRandomIntInclusive(0, size - 1)
        board[randRow][randCol] = MINE
    }

    return board

}

function renderBoard() {
    var strHTML = ''
    for (let i = 0; i < gBoard.length; i++) {
        strHTML += `<tr>\n`
        for (let j = 0; j < gBoard[0].length; j++) {
            const cell = gBoard[i][j]

            var className = (cell === 'S') ? 'safe' : 'mine'

            const title = `Cell: ${i}, ${j}`

            strHTML += `<td title="${title}" class="cell ${className}"
             onClick="onCellClicked(this, ${i}, ${j})"><span>${cell}</span></td>\n`
        }
        strHTML += `</tr>\n`

    }
    const elCells = document.querySelector('.minesweeper-cells')
    elCells.innerHTML = strHTML


    const elNegs = document.querySelector('.neg-count span')
    elNegs.innerHTML = minesNegsCount

    const minesCount = gLevel.MINES
    const elMines = document.querySelector('.mines-count span')
    elMines.innerHTML = minesCount



}

function setMinesNegsCount(rowIdx, colIdx, board) {

    for (let i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue

        for (let j = colIdx - 1; j <= colIdx + 1; j++) {
            if (i === rowIdx && j === colIdx) continue
            if (j < 0 || j >= board[0].length) continue

            var currCell = board[i][j]

            if (currCell === MINE) minesNegsCount++
        }
    }
    return minesNegsCount


}

function onCellClicked(elCell, i, j) {
    const cell = gBoard[i][j]
    elCell.classList.add('selected')

    const negCount = setMinesNegsCount(i, j, gBoard)
    renderBoard(minesNegsCount)
    minesNegsCount = 0


}

function onCellMarked(elCell, i, j) {

}

function checkGameOver() {

}

function expandShown(board, elCell, i, j) {

}

function onSetLevel(level) {
    const levelSizes = [
        4, 8, 12
    ]
    const numOfMines = [
        2, 14, 32
    ]

    gLevel.SIZE = levelSizes[level]
    gLevel.MINES = numOfMines[level]
    onInit(level)
}







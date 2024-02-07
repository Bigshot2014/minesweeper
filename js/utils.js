'use strict'

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// for (let i = rowIdx - 1; i <= rowIdx + 1; i++) {
//     if (i < 0 || i >- board.length) continue
//     for (let j = colIdx -1; j <= colIdx + 1; j++) {
//         if ( i === rowIdx && j === coldIdx) continue
//         if ( j < 0 || j >= board[0].length) continue
//         var currCell = board[i][j]
//         if (currCell.isSeat && !currCell.isBooked) count++
//     }
// }
// return count


// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }


// function playSound() {
//     const sound = new Audio('sound/sound.mp4')
//     sound.play()
// }

// function showModal() {
//     const elModal = document.querySelector('.modal')
//     elModal.classList.remove('hide')
// }

// function hideModal() {
//     const elModal = document.querySelector('.modal')
//     elModal.classList.add('hide')
// }
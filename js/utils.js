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


function startTimer() {


    var timer = document.getElementById("timer").innerHTML
    var arr = timer.split(":")
    var hour = parseInt(arr[0])
    var min = parseInt(arr[1])
    var sec = parseInt(arr[2])

    if (sec === 59) {
        if (min === 59) {
            hour++
            min = 0
            if (hour < 10) hour = '0' + hour
        } else {
            min++
        }
        sec = 0
    } else {
        sec++
    }

    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec

    document.getElementById("timer").innerHTML = hour + ':' + min + ':' + sec
    setTimeout(startTimer, 1000)


}


function resetTimer() {
    clearInterval(startTimer)
    document.getElementById("timer").innerHTML = "00:00:00"
}

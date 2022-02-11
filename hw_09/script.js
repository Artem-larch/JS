// task #1
function getPerfect(a, b) {
    let result = []
    for (let i = a; i < b; i++) {
        sum = 0
        for (let n = 1; n <= i / 2; n++) {
            if (i % n === 0) sum += n
        }
        if (i === sum) result.push(i)
    }
    return result
}

// console.log(getPerfect(1, 100))



// task #2
function time(hour, minute = '00', second = '00') {
    // let showTime = document.createElement('p')
    let showTime = document.querySelector('.showTime')
    showTime.innerHTML = `${hour}:${minute}:${second}`
}

// time(15, 20, 45)



// task #3
function timeToSeconds(hour, minute, second) {
    return hour * 60 * 60 + minute * 60 + second;
}

// console.log(timeToSeconds(15, 20, 25))



// task #4
function secondsToHHMMSS(seconds) {
    return `${Math.floor(seconds / 3600)}:${Math.floor(seconds % 60)}:${seconds % 60}`
}

// console.log(secondsToHHMMSS(4650))



// task #5
function countDate(hour=1, minute=0, second=0, hrs, min, s) {
    let date1 = timeToSeconds(hour, minute, second)
    let date2 = timeToSeconds(hrs, min, s)
    let result = date1 - date2
    return console.log(secondsToHHMMSS(result))
}

console.log(10, 03, 20)

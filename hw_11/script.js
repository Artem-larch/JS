// Задание 1
let car = {
    manufacturer: "Audi",
    model: "Q5",
    yearOfIssue: "2008—2018",
    averageSpeed: 42,
    about: function() {
        return console.log(this)
    },
    time: function(distance) {
        let averageSpeed = this.averageSpeed
        let time = Math.round(distance / averageSpeed)
        let rest = time / 4
        
        return console.log(time + rest)
    }
}
car.about()
car.time(200)



// Задание 2
let fract = {
    numer: 10,
    denom: 5,
    sum: function() {
        return console.log(this.numer + this.denom)
    },
    minus: function() {
        return console.log(this.numer - this.denom)
    },
    multiply: function() {
        return console.log(this.numer * this.denom)
    },
    divide: function() {
        return console.log(this.numer / this.denom)
    },
    reduct: function() {
        let newNumerator = this.numer
        let newDenominator = this.denom
        for (let i = 2; i <= this.numer; i++) {
            if (this.numer % i === 0 && this.denom % i === 0)
                newNumerator = this.numer / i
            newDenominator = this.denom / i;
        }
        return console.log(newNumerator / newDenominator)
    }
}
/* 
fract.sum()
fract.minus()
fract.multiply()
fract.divide()
fract.reduct()
*/



// ======= hw 12

// Задание 3
let time = {
    hours: 18,
    minutes: 04,
    seconds: 50,
    showTime: function() {
        return console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    },
    changeSec: function(sec = 0) {
        let timeInSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds
        let resultOfChangeInSec = timeInSeconds + sec
        this.hours = Math.floor(resultOfChangeInSec / 3600)
        resultOfChangeInSec %= 3600
        this.minutes = Math.floor(resultOfChangeInSec / 60)
        this.seconds = resultOfChangeInSec % 60
        return console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    },
    changeMin: function(min = 0) {
        let additionalSecFromMin = min * 60
        let timeInSec = this.hours * 3600 + this.minutes * 60 + this.seconds
        let resultOfChangeInSec = timeInSec + additionalSecFromMin
        this.hours = Math.floor(resultOfChangeInSec / 3600)
        resultOfChangeInSec %= 3600
        this.minutes = Math.floor(resultOfChangeInSec / 60)
        this.seconds = resultOfChangeInSec % 60
        return console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    },
    changeHours: function(h = 0) {
        return console.log(`${this.hours + h}:${this.minutes}:${this.seconds}`)
    }
}

time.showTime()
time.changeSec(25)
time.changeMin(20)
time.changeHours(1)

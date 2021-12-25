// task #1
let enterA = prompt('Введите первое число')
let enterB = prompt('Введите второе число')

let result_X = enterB/enterA
alert(`X: ${result_X}`)



// task #2
let userHours = prompt('Введите текущее время (сейчас часы)')
let userMinute = prompt('Введите текущее время (сейчас минуты)')

let hrs = 24
let minutes = 60

let hrsToNextDay = hrs-userHours
let minuteToNextDay = minutes-userMinute
alert(`${hrsToNextDay} часов и ${minuteToNextDay} минут осталось до следующего дня`)



// task #3
let enterNumber = prompt('Введите трехзначное число')
let secondNum = Math.round(enterNumber/10)%10
alert(`Вторая цифра числа ${enterNumber}: ${secondNum}`)



// task #4
let eNumber = prompt('Введите пятизначное число')
let lastNumber = eNumber%10

alert(String(lastNumber) + Math.floor(eNumber/10))



// task #5
let salary = 250
let sales = prompt('Введите сумму продаж за месяц')
let resultSalary = salary+sales*0.10

alert(`Сумма зарплаты работника: ${resultSalary}$`)

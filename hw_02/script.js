// task #1
const exchange_rate = '0.89'

let enterUsd = prompt('Введите количество долларов, которые нужно перевести в евро')
let result = Number(enterUsd)*Number(exchange_rate)
alert(`${enterUsd}$ = ${result}€`)


// task #2
let sizeFlashDrive = prompt('Укажите объем флешки в Гб')
let fileSizeMb = '820'
let result1 = Math.round(sizeFlashDrive*1024/fileSizeMb)
alert(`${result1} файлов размером ${fileSizeMb}Мб помещается на флешку с объемом ${sizeFlashDrive}Гб`)


// task #3
let totalMoney = prompt('Введите сумму денег (в долларах)')
let chocolatePrice = prompt('Введите цену одной шоколадки (в долларах)')

let amountChocolate = Math.floor(totalMoney/chocolatePrice)
let change = totalMoney - chocolatePrice * amountChocolate
alert(`На эту сумму можно купить ${amountChocolate} шоколадок.\nСдача будет в размере ${change}$`)


// task #4
let enterNum = prompt('Введите трехзначное число')
let numCut = Math.round(enterNum/10)
let reverseNum = String(enterNum%10)+String(numCut%10)+String(enterNum/100)
alert(`Число ${enterNum} задом наперед: ${reverseNum}`)


// task #5
let number = prompt('Введите целое число')

let evenNum = number % 2 !== 1 && alert(`число ${number} четное`)
let oddNum = number % 2 !== 0 && alert(`число ${number} нечетное`)



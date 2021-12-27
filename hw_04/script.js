// task #1
let age = prompt('Введите ваш возраст')

if (age <= 0) {
    alert('Ты ещё не родился ....')
} 
else if (age >= 2 && age <= 9) {
    alert('Ты ребенок')
} 
else if (age >= 12 && age <= 18) {
    alert('Ты подросток')
} 
else if (age >= 18 && age <= 60) {
    alert('Вы взрослый')
} 
else if (age >= 60 && age <= 100) {
    alert('Вы пенсионер')
} 
else {
    alert('Возможно вы неправильно ввели свой возраст! Попробуйте ещё раз.')
}




// task #2
let enterNumber = Number(prompt('Введите число от 0 до 9'))

switch (enterNumber) {
    case 0:
        alert(`На клавише ${enterNumber} расположен символ ")"`)
        break
    case 1:
        alert(`На клавише ${enterNumber} расположен символ "!"`)
        break
    case 2:
        alert(`На клавише ${enterNumber} расположен символ "@"`)
        break
    case 3:
        alert(`На клавише ${enterNumber} расположен символ "#"`)
        break
    case 4:
        alert(`На клавише ${enterNumber} расположен символ "$"`)
        break
    case 5:
        alert(`На клавише ${enterNumber} расположен символ "%"`)
        break
    case 6:
        alert(`На клавише ${enterNumber} расположен символ "^"`)
        break
    case 7:
        alert(`На клавише ${enterNumber} расположен символ "&"`)
        break
    case 8:
        alert(`На клавише ${enterNumber} расположен символ "*"`)
        break
    case 9:
        alert(`На клавише ${enterNumber} расположен символ "("`)
        break

    default:
        alert('Вы ввели неверное число! Попробуйте ещё раз.')
        break
}



// task #3
let userNumber = prompt('Введите трехзначное число')

let firstNum = Math.round(userNumber / 100)
let secondNum = Math.round(userNumber/ 10) % 10
let thirdNum = userNumber % 10

if (firstNum == secondNum == thirdNum) {
    alert('Все цифры одинаковые')
}

if (firstNum !== secondNum && firstNum !== thirdNum && secondNum !== thirdNum) {
    alert('Все цифры разные')
}

/*
if (firstNum == secondNum) {
    alert('Первая и вторая цифры одинаковы')    
}

if (firstNum == thirdNum) {
    alert('Первая и третья цифры одинаковы')    
}

if (secondNum == thirdNum) {
    alert('Вторая и третья цифры одинаковы')    
}
*/



// task #4
let year = prompt('Введите год')

if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    alert(`${year} год високосный`)
}
else {
    alert(`${year} год не високосный`)
}



// task #5
let num = prompt('Введите пятиразрядное число')

let reverse = num.split("").reverse().join("")

if (reverse == num) {
    alert(`${num} число является палиндромом`)
}
if (reverse != num) {
    alert(`${num} число не является палиндромом`)
}


// task #1

/*
let num1 =+ prompt('Введите первое число')
let num2 =+ prompt('Введите второе число')
let sum = 0

while (num1 <= num2){
    sum += num1
    num1++
}

console.log(`Answer: ${sum}`)
*/



// task #2

/*
let number1 =+ prompt('Введите первое число (меньшее)')
let number2 =+ prompt('Введите второе число (большее)')
let nod = 1

for (let i = 1; i < number1; i++){
    if (number1 % i == 0 && number2 % i == 0 && i > nod) {
        nod = i
    }
}

console.log(nod)
*/


// task #3

/*
let number = prompt('Введите число')

for (let i = 1; i < number; i++) {
    if (number % 1 == 0){
        console.log(i)
    }
}
*/



// task #4

/*
let num = prompt('Введите число')

numSize = num.split("")
console.log(`В этом числе ${numSize.length} цифр.`)
*/



// task #5

let numbers = prompt('Введите 10 чисел (через пробел)')

let arrNumbers = numbers.split(" ")
let positive = 0
let negative = 0
let zero = 0
let odd = 0
let even = 0

arrNumbers.forEach((value, idx, arr) => {
    console.log(value)
    if (Number(value) > 0){
        positive += 1
    }
    else if (Number(value) < 0){
        negative += 1
    }
    else if (Number(value) == 0){
        zero += 1
    }
    else if (Number(value) % 2 == 1){
        odd += 1
    }
    else if (Number(value) % 2 == 0){
        even += 1
    }
})

console.log(`Вы ввели ${positive} позитивных чисел.\n${negative} - отрицательных чисел.\n${zero} - нулей.\nИз всех чисел: ${even} четных и ${odd} нечётных.`)

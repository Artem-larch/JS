// task #1
// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

function calculator(){
    do {
        let num1 = Number(prompt('Введите первое число'))
        let num2 = Number(prompt('Введите второе число'))
        let symbol = prompt('Введите знак (+, -, /, *)')

        switch (symbol){
            case '+':
                alert(`${num1} + ${num2} = ${num1 + num2}`)
                break
            case '-':
                alert(`${num1} - ${num2} = ${num1 - num2}`)
                break
            case '/':
                alert(`${num1} / ${num2} = ${num1 / num2}`)
                break
            case '*':
                alert(`${num1} * ${num2} = ${num1 * num2}`)
                break
            default:
                alert('Ошибка! Попробуйте снова.')
        }
    } while (confirm('Хотите ещё решить пример?'))
}



// task #2
// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

// let userNum = prompt('Введите число')
// let numMove = prompt('Введите на сколько цифр нужно сдвинуть число')

function shift(str, count) {
    let i = str.length > 0 ? count % str.length : 0
   
    return str.slice(i) + str.slice(0, i)
}

// alert(shift(userNum, numMove))



// task #3
// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

/*
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
let currentDay = 0

while (confirm(`${days[currentDay]}. Хотите увидеть следующий день?`)) {
    currentDay = (currentDay + 1) % days.length;
}
*/


// task #4
// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

for (let i = 2; i <= 9; i++) {
    const container = document.createElement('div')
    container.classList.add('container')
    for (let j = 1; j <= 9; j++) {
        container.innerHTML += `<p>${i} x ${j} = ${i*j}</p>`
    }
    document.body.append(container)
}



// task #5
// Игра «Угадай число».

/*
let userGuess = prompt('Добро пожаловать в игру "Угадай число"!\nВам требуется угадать число от 0 до 100.')
let randomNumber = Math.floor(Math.random() * 10) + 1

if (userGuess === randomNumber){
    alert('Вы угадали число!')
}
else if (userGuess > randomNumber) {
    alert('Загаданное число больше.')
}
else if (userGuess < randomNumber){
    alert('Загаданное число меньше.')
}
*/

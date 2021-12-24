// task #1
let name = prompt('Введите ваше имя')
alert('Привет, ' + name + '!')

// task #2
const now = 2021
let birth_year = prompt('Введите ваш год рождения')
let result = now-birth_year
alert(name + ', тебе ' + result + '.')


// task #3
let square = prompt('Введите длину стороны квадрата')
let square_result = square*4
alert('Периметр квадрата: ' + square_result + '.')


// task #4
let radius = prompt('Введите радиус окружности')
let radius_result = Math.PI*radius
alert('Площадь окружности: ' + radius_result + '.')


// task #5
let distanceTown = prompt('Введите расстояние в км между двумя городами')
let howMuchHours = prompt('Введите за сколько часов нужно добраться')
let speed = distanceTown/howMuchHours
alert(`Скорость, с которой необходимо двигаться, чтобы
успеть вовремя: ${speed}км/ч`)


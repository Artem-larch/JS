// task #1
function number(num1, num2) {
    if (num1 < num2) return -1
    else if (num1 > num2) return 1
    else if (num1 === num2) return 0
    else if (num1 != Number(num1) || num2 != Number(num2)) return 'Это не число!'
}
console.log(number(30, 90))


// task #2
function factorial(number) {
    return (number != 1) ? number * factorial(number - 1) : 1
}
console.log(factorial(5))


// task #3
function get3Nums(num1, num2, num3) {
    let arrayOfNums = [num1, num2, num3]
    // arrayOfNums.join("")
    console.log(arrayOfNums.join(""))
}
get3Nums(4, 7, 9)


// task #4
function getsquare(w, h = w) {
    return w * h
}
console.log(getsquare(10, 15))


// task #5
function perfect(number) {
    let sum = 0
    for (let i = 1; i <= number; i++){
        if (number % i == 0){
            sum += i
        }
        if (sum == number) return `${number} - это число совершенное.`
    }
}
console.log(perfect(28))

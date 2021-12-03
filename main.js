// let firstNumber = parseInt(prompt("Введите первое число"));
// let secondNumber = parseInt(prompt("Введите второе число"));
// let symbol = prompt("Введите знак (+ - * /");

// let result ;


// if (symbol == "+") {
//     result = firstNumber + secondNumber
//     alert(`${firstNumber} + ${secondNumber} = ${result} `)
    // } 
    // else if (symbol == "-") {
    //     result = firstNumber - secondNumber
    //     alert(`${firstNumber} - ${secondNumber} = ${result} `)
    //     } 
    //     else if (symbol == "*") {
    //         result = firstNumber * secondNumber
    //         alert(`${firstNumber} * ${secondNumber} = ${result} `)
    //         } 
    //     else if (symbol == "/") {
    //         result = firstNumber / secondNumber
    //         alert(`${firstNumber} / ${secondNumber} = {result} `)
    //          } 


let firstNumber = parseInt(prompt("Введите первое число"));
let secondNumber = parseInt(prompt("Введите второе число"));
let symbol = prompt("Введите знак (+ - * /");

let result ;

function addResult (symbol) {
    if (symbol == "+") {
        result = firstNumber + secondNumber
        alert(`${firstNumber} + ${secondNumber} = ${result} `)
        } 
        else if (symbol == "-") {
            result = firstNumber - secondNumber
            alert(`${firstNumber} - ${secondNumber} = ${result} `)
            } 
            else if (symbol == "*") {
                result = firstNumber * secondNumber
                alert(`${firstNumber} * ${secondNumber} = ${result} `)
                } 
            else if (symbol == "/") {
                result = firstNumber / secondNumber
                alert(`${firstNumber} / ${secondNumber} = {result} `)
                 } 
} 

addResult(symbol);






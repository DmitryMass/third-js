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


// let firstNumber = parseInt(prompt("Введите первое число"));
// let secondNumber = parseInt(prompt("Введите второе число"));
// let symbol = prompt("Введите знак (+ - * /");

// let result ;

// function addResult (symbol) {
//     if (symbol == "+") {
//         result = firstNumber + secondNumber
//         alert(`${firstNumber} + ${secondNumber} = ${result} `)
//         } 
//         else if (symbol == "-") {
//             result = firstNumber - secondNumber
//             alert(`${firstNumber} - ${secondNumber} = ${result} `)
//             } 
//             else if (symbol == "*") {
//                 result = firstNumber * secondNumber
//                 alert(`${firstNumber} * ${secondNumber} = ${result} `)
//                 } 
//             else if (symbol == "/") {
//                 result = firstNumber / secondNumber
//                 alert(`${firstNumber} / ${secondNumber} = {result} `)
//                  } 
// } 

// addResult(symbol);

let firstNumber = parseInt(prompt("Введите первое число"));
let secondNumber = parseInt(prompt("Введите второе число"));
let symbol = prompt("Введите знак (+ - * /");

let result;

function calcSum(firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
  console.log(`${firstNumber} + ${secondNumber} = ${result} `);
}
function calcDif(firstNumber, secondNumber) {
  result = firstNumber - secondNumber;
  console.log(`${firstNumber} - ${secondNumber} = ${result} `);
}
function calcMulti(firstNumber, secondNumber) {
  result = firstNumber * secondNumber;
  console.log(`${firstNumber} * ${secondNumber} = ${result} `);
}
function calcDiv(firstNumber, secondNumber) {
  result = firstNumber / secondNumber;
  console.log(`${firstNumber} / ${secondNumber} = ${result} `);
}
function showResult(symbol, firstNumber, secondNumber) {
  if (symbol == "+") {
    calcSum(firstNumber, secondNumber);
  } else if (symbol == "-") {
    calcDif(firstNumber, secondNumber);
  } else if (symbol == "*") {
    calcMulti(firstNumber, secondNumber);
  } else if (symbol == "/") {
    calcDiv(firstNumber, secondNumber);
  } else {
    console.log("Ввели некорректный символ");
  }
}
showResult(symbol, firstNumber, secondNumber);




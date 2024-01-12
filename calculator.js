function add(a, b) {
  return parseInt(a) + parseInt(b);
}
function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}
function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

let firstNumber;
let operation = "";
let finalOperator = "";
let secondNumber;
let tempNumber;
let finalResult = "";

function operate(operator, num1, num2) {
  if (operator == "+") {
    finalResult = add(num1, num2);
  } else if (operator == "-") {
    finalResult = subtract(num1, num2);
  } else if (operator == "x") {
    finalResult = multiply(num1, num2);
  } else if (operator == "/") {
    finalResult = divide(num1, num2);
  } else {
    alert("Invalid input");
  }
}
const answer = document.querySelector(".answer");
let displayValue = "";
const numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    displayValue += number.textContent;
    answer.textContent = displayValue;
    tempNumber = answer.textContent;
  });
});

const operators = document.querySelectorAll(".operators");
operators.forEach((o) => {
  o.addEventListener("click", () => {
    if (operation == "") {
      displayValue += o.textContent;
      operation = o.textContent;
      answer.textContent = displayValue;
      firstNumber = tempNumber;
      tempNumber = answer.textContent;
    }
  });
});

const clear = document.querySelector(".clear1");
clear.addEventListener("click", () => {
  answer.textContent = "";
  displayValue = "";
  firstNumber = null;
});

const backspace = document.querySelector(".delete");
backspace.addEventListener("click", () => {
  let temp = displayValue.split("");
  let temp1 = temp.slice(0, -1);
  let temp2;
  displayValue = temp1.join("");
  answer.textContent = displayValue;
  console.log(temp);
  console.log(temp.length);
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == "/" || temp[i] == "x" || temp[i] == "-" || temp[i] == "+") {
      temp2 = 1;
      break;
    } else {
      temp2 = 0;
    }
  }
  if (temp2 == "0") {
    operation = "";
  }
});
// let temp3;
// let temp4 = "";
// let temp5 = "";
// const equalsTo = document.querySelector(".equalsTo");
// equalsTo.addEventListener("click", () => {
//   let temp = displayValue.split("");
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] == "/" || temp[i] == "x" || temp[i] == "-" || temp[i] == "+") {
//       temp3 = i;
//     }
//   }
//   for (let i = 0; i < temp3; i++) {
//     temp4 += parseInt(temp[i]);
//   }
//   for (let i = temp3 + 1; i < temp.length; i++) {
//     temp5 += parseInt(temp[i]);
//   }
//   firstNumber = temp4;
//   secondNumber = temp5;
//   finalOperator = temp[temp3];

//   operate(finalOperator, firstNumber, secondNumber);
//   answer.textContent = finalResult;
// });

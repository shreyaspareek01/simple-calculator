function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}
function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}
function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

let firstNumber = "0";
let operation = "";
let finalOperator = "";
let secondNumber = "0";
let tempNumber;
let finalResult = "";
const upperOutput = document.querySelector(".upperOutput");
let displayValue = "";
let decimalCount = 0;

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
answer.style["font-size"] = "4em";

const numbers = document.querySelectorAll(".numbers");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    displayValue += number.textContent;
    answer.textContent = displayValue;
    let tempAns = answer.split("");
  });
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
  if (decimalCount == 0) {
    displayValue += ".";
    answer.textContent = displayValue;
    decimalCount = 1;
  }
});

const operators = document.querySelectorAll(".operators");
operators.forEach((o) => {
  o.addEventListener("click", () => {
    if (answer.textContent != "") {
      decimalCount = 0;
      if (operation == "") {
        displayValue += o.textContent;
        operation = o.textContent;
        answer.textContent = displayValue;
      } else {
        let tempAns = answer.textContent.split("");
        if (
          tempAns[tempAns.length - 1] != "/" &&
          tempAns[tempAns.length - 1] != "x" &&
          tempAns[tempAns.length - 1] != "-" &&
          tempAns[tempAns.length - 1] != "+"
        ) {
          updateResult();
          answer.textContent += o.textContent;
          displayValue = answer.textContent;
          operation = o.textContent;
          decimalCount = 0;
        }
      }
    }
  });
});

const clear = document.querySelector(".clear1");
clear.addEventListener("click", () => {
  answer.textContent = "";
  displayValue = "";
  operation = "";
  upperOutput.textContent = "";
  decimalCount = 0;
});

const backspace = document.querySelector(".delete");
backspace.addEventListener("click", () => {
  let temp = answer.textContent.split("");
  let temp1 = temp.slice(0, -1);
  let temp2 = 0;
  displayValue = temp1.join("");
  answer.textContent = displayValue;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == "/" || temp[i] == "x" || temp[i] == "-" || temp[i] == "+") {
      temp2 = 1;
      break;
    }
  }
  for (let i = 0; i < temp1.length; i++) {
    if (temp1[i] == ".") {
      decimalCount = 1;
      break;
    } else {
      decimalCount = 0;
    }
  }
  if (temp2 != 0) {
    operation = "";
  }
});
let temp3;
let temp4 = "";
let temp5 = "";
const equalsTo = document.querySelector(".equalsTo");
equalsTo.addEventListener("click", updateResult);

function updateResult() {
  let temp = displayValue.split("");
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == "/" || temp[i] == "x" || temp[i] == "-" || temp[i] == "+") {
      temp3 = i;
    }
  }
  for (let i = 0; i < temp3; i++) {
    temp4 += parseFloat(temp[i]);
  }
  for (let i = temp3 + 1; i < temp.length; i++) {
    temp5 += parseFloat(temp[i]);
  }
  firstNumber = parseFloat(temp.slice(0, temp3).join(""));
  secondNumber = parseFloat(temp.slice(temp3 + 1).join(""));
  finalOperator = temp[temp3];

  operate(finalOperator, firstNumber, secondNumber);
  answer.textContent = parseFloat(finalResult)
    .toFixed(4)
    .replace(/\.?0+$/, "");

  upperOutput.textContent = displayValue;
  displayValue = answer.textContent = parseFloat(finalResult)
    .toFixed(4)
    .replace(/\.?0+$/, "");

  operation = "";

  for (let i = 0; i < answer.textContent.split("").length; i++) {
    if (answer.textContent.split("")[i] == ".") {
      decimalCount = 1;
    }
  }
}

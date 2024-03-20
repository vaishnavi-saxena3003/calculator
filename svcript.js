let inputValue = document.querySelector(".inputNumber");
let op = "";
let result = 0;

const handleCalculate = () => {
  console.log("answer", op);
  switch (op) {
    case "+":
      inputValue.value = result + Number(inputValue.value);
      break;
    case "*":
      inputValue.value = result * Number(inputValue.value);
      break;
    case "/":
      inputValue.value == "" || inputValue.value == 0
        ? mathError()
        : (inputValue.value = result / Number(inputValue.value));
      break;
    case "-":
      inputValue.value = result - Number(inputValue.value);
      break;
    default:
      inputValue.value = "";
  }
};

const handleAdd = () => {
  result = Number(inputValue.value);
  op = document.querySelector(".add").value;
  inputValue.value = "";
};

const handleMultiply = () => {
  result = Number(inputValue.value);
  op = document.querySelector(".multiply").value;
  inputValue.value = "";
};

const handleSubtract = () => {
  result = Number(inputValue.value);
  op = document.querySelector(".subtract").value;
  inputValue.value = "";
};

const handleDivide = () => {
  result = Number(inputValue.value);
  op = document.querySelector(".divide").value;
  inputValue.value = "";
};

const handleReset = () => {
  inputValue.value = "";
  result = 0;
  op = "";
};

const mathError = () => {
  alert("can not divide by zero(0)");
  handleReset();
};
const handleBtnClick = (event) => {
  inputValue.value = inputValue.value + event.target.value;
};

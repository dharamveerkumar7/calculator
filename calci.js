let currentInput = "";

function appendToDisplay(value) {
  if (currentInput === "0" && value !== ".") {
    currentInput = "";
  }
  currentInput += value;
  document.getElementById("result").value = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  document.getElementById("result").value = currentInput;
}

function calculateResult() {
  try {
    currentInput = eval(currentInput);
    document.getElementById("result").value = currentInput;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

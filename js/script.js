// Adiciona números e operadores no display
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Calcula o valor da expressão no display
function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erro";
  }
}

// Limpa o display
function clearDisplay() {
  document.getElementById("display").value = "";
}

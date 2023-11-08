
function decremento() {
  var conta = parseInt(document.getElementById("conta").innerHTML);
  conta = conta - 1;
  console.log(conta);
document.getElementById("conta").textContent=conta;
}

function incremento() {
  var conta = parseInt(document.getElementById("conta").innerHTML);
  conta = conta + 1;
  console.log(conta);
  document.getElementById("conta").textContent=conta;
}

function reset() {
  var conta = parseInt(document.getElementById("conta").innerHTML);
  conta = 0;
  console.log(conta);
  document.getElementById("conta").textContent=conta;
}



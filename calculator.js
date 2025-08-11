function pick(val) {
  document.getElementById("display").value += val;
}

function clr() {
  document.getElementById("display").value = "";
}

function backspace() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function solve() {
  let x = document.getElementById("display").value;
  try {
    let y = eval(x);
    document.getElementById("display").value = y;
  } catch (err) {
    document.getElementById("display").value = "Error";
  }
}

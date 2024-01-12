const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBTN = document.getElementById("submit");
const plusBTN = document.getElementById("plus");
const minusBTN = document.getElementById("minus");
let action = "+";

plusBTN.onclick = function () {
  action = "+";
};
minusBTN.onclick = function () {
  action = "-";
};
function colculate(inp1, inp2, action) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (action == "+") {
    const res = num1 + num2;
    return res;
  } else if (action == "-") {
    const res = num1 - num2;
    return res;
  }
}
function printResult(res) {
  if (res >= 0) {
    (document.getElementById("result")).style.color = "green";
    (document.getElementById("result")).textContent = res;
  } else {
    (document.getElementById("result")).style.color = "red";
    (document.getElementById("result")).textContent = res;
  }
}
submitBTN.onclick = function () {
  const sum = colculate(input1, input2, action);
  console.log(sum);
  printResult(sum);
};

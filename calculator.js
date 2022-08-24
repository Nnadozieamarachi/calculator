// to clear  the display box

function clear2() {
  document.querySelector("#displayBx").value = "";
  console.log("i was cleared");
}
document.querySelector("#clearBtn").addEventListener("click", clear2);

//to display values clicked on

function display1() {
  document.querySelector("#displayBx").value += 1;
}
document.querySelector(".btn1").addEventListener("click", display1);

// console.log(btn, "btn");
// btn.addEventListener("click", display);S

function display2() {
  document.querySelector("#displayBx").value += 2;
}
document.querySelector(".btn2").addEventListener("click", display2);

function display3() {
  document.querySelector("#displayBx").value += 3;
}
document.querySelector(".btn3").addEventListener("click", display3);

function display4() {
  document.querySelector("#displayBx").value += 4;
}
document.querySelector(".btn4").addEventListener("click", display4);

function display5() {
  document.querySelector("#displayBx").value += 5;
}
document.querySelector(".btn5").addEventListener("click", display5);

function display6() {
  document.querySelector("#displayBx").value += 6;
}
document.querySelector(".btn6").addEventListener("click", display6);

function display7() {
  document.querySelector("#displayBx").value += 7;
}
document.querySelector(".btn7").addEventListener("click", display7);

function display8() {
  document.querySelector("#displayBx").value += 8;
}
document.querySelector(".btn8").addEventListener("click", display8);

function display9() {
  document.querySelector("#displayBx").value += 9;
}
document.querySelector(".btn9").addEventListener("click", display9);

function display0() {
  document.querySelector("#displayBx").value += 0;
}
document.querySelector(".btn0").addEventListener("click", display0);

function displayadd() {
  document.querySelector("#displayBx").value += "+";
}
document.querySelector(".btnadd").addEventListener("click", displayadd);

function displaySubtract() {
  document.querySelector("#displayBx").value += "-";
}
document
  .querySelector(".btnSubtract")
  .addEventListener("click", displaySubtract);

function displayDiv() {
  document.querySelector("#displayBx").value += "/";
}
document.querySelector(".btnDiv").addEventListener("click", displayDiv);

function displayPoint() {
  document.querySelector("#displayBx").value += ".";
}
document.querySelector(".btnPoint").addEventListener("click", displayPoint);

// function displayEqual() {
//   document.querySelector("#displayBx").value += "=";
// }
document.querySelector(".btnEqual").addEventListener("click", displayEqual);

function displayMulti() {
  document.querySelector("#displayBx").value += "*";
}
document.querySelector(".btnMulti").addEventListener("click", displayMulti);

//to calculate arithemetics

function displayResult() {
  let visibleNum = document.getElementById("displayBx").value;
  let answer = eval(visibleNum);
  document.getElementById("displayBx").value = answer;
}

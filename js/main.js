import {Calculator} from "./calculator.js";

var btnDelete = document.getElementById("btnDelete");
var btnPlus = document.getElementById("btnPlus");
var btnMinus = document.getElementById("btnMinus");
var btnEqual = document.getElementById("btnEqual");

var calculator = new Calculator();

for(let i = 0; i < 10; i++) {
    document.getElementById("btn" + i).addEventListener("click", () => {calculator.numberGetter(document.getElementById("btn" + i).innerHTML)});
}

btnDelete.addEventListener("click", () => {calculator.delete()})
btnPlus.addEventListener("click", () => {calculator.addition()});
btnMinus.addEventListener("click", () => {calculator.substraction()});
btnEqual.addEventListener("click", () => {calculator.equality()});

for(let i = 0; i < calculator.recordArray.length; i++) {
    document.getElementById("recordBtn" + i).addEventListener("click", () => {calculator.insertRecord(document.getElementById("recordBtn" + i).value)});
}
import {DNI} from "./dni.js";

let inputData = document.getElementById("dni").value;
let checkBtn = document.getElementById("checkBtn");
let check = new DNI();

checkBtn.addEventListener("click", function() {check.letterChecker(inputData)});
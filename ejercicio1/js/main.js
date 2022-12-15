import {DNI} from "./dni.js";

let inputData = document.getElementById("dni").value;
let checkBtn = document.getElementById("checkBtn");
let check = new DNI();

checkBtn.onclick = check.letterChecker(inputData);

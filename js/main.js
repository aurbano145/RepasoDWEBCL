import {DNI} from "./dni.js";

let checkBtn = document.getElementById("checkBtn");
let check = new DNI();

checkBtn.addEventListener("click", function() {check.letterChecker()});
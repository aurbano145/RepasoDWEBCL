import {Editor} from "./editor.js";

var editBtn1 = document.getElementById("edit1");
var editBtn2 = document.getElementById("edit2");

var editor = new Editor();

editBtn1.addEventListener("click", function() {editor.lineEditor(editable1)});
editBtn2.addEventListener("click", function() {editor.lineEditor(editable2)});
import {Editor} from "./editor.js";

var editBtnFirst = document.getElementById("editFirst");
var editBtnLast = document.getElementById("editLast");
var addBtn = document.getElementById("addition");

var editor = new Editor();

editBtnFirst.addEventListener("click", function() {editor.lineEditor(editableFirst)});
editBtnLast.addEventListener("click", function() {editor.lineEditor(editableLast)});

addBtn.addEventListener("click", function() {editor.createLine(moreText)});
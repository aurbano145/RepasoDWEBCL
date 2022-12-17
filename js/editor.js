class Editor {
    lineEditor(line) {
        var editBtn1 = document.getElementById("edit1");
        var editBtn2 = document.getElementById("edit2");
        var text = line.innerHTML;

        var displayEditor = "<textarea id='textEditor' style='resize: none;'>" + text + "</textarea><button id='confirm' class='confirmBtn'>Confirm</button><button id='cancel' class='cancelBtn'>Cancel</button>";
        var textEditor = document.getElementById("texEditor");
        var confirmBtn = document.getElementById("confirm");
        var cancelBtn = document.getElementById("cancel");

        line.innerHTML = displayEditor;
        editBtn1.style.display = "none";
        editBtn2.style.display = "none";

        function confirmEdition() {
            line.innerHTML = textEditor.innerHTML;
            editBtn1.style.display = "block";
            editBtn2.style.display = "block";
        }

        function cancelEdition() {
            line.innerHTML = text;
            editBtn1.style.display = "block";
            editBtn2.style.display = "block";
        }

        if(confirmBtn) {
            confirmBtn.addEventListener("click", () => {confirmEdition()});
        }

        if(cancelBtn) {
            cancelBtn.addEventListener("click", () => {cancelEdition()});
        }
    }
}
export {Editor};
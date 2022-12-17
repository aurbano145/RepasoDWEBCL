class Editor {
    lineEditor(line) {
        var editBtn1 = document.getElementById("edit1");
        var editBtn2 = document.getElementById("edit2");
        var text = line.innerHTML;

        editBtn1.style.display = "none";
        editBtn2.style.display = "none";

        var displayEditor = "<textarea id='textEditor' style='resize: none;'>" + text + "</textarea><button id='confirm' class='confirmBtn'>Confirm</button><button id='cancel' class='cancelBtn'>Cancel</button>";

        line.innerHTML = displayEditor;
        var confirmBtn = document.getElementById("confirm");
        var cancelBtn = document.getElementById("cancel");
        var textEditor = document.getElementById("textEditor");

        if(confirmBtn) {
            confirmBtn.addEventListener("click", () => {
                line.innerHTML = textEditor.value;
                editBtn1.style.display = "block";
                editBtn2.style.display = "block";
            });
        }

        if(cancelBtn) {
            cancelBtn.addEventListener("click", () => {
                line.innerHTML = text;
                editBtn1.style.display = "block";
                editBtn2.style.display = "block";
            });
        }
    }
}
export {Editor};
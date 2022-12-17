class Editor {
    editBtnFirst = document.getElementById("editFirst");
    editBtnLast = document.getElementById("editLast");
    addBtn = document.getElementById("addition");

    counter = 0;

    lineEditor(line) {
        var text = line.innerHTML;

        this.editBtnFirst.style.display = "none";
        this.editBtnLast.style.display = "none";
        this.addBtn.style.display = "none";

        var displayEditor = "<textarea id='textEditor' style='resize: none;'>" + text + "</textarea><button id='confirm' class='confirmBtn'>Confirm</button><button id='cancel' class='cancelBtn'>Cancel</button>";

        line.innerHTML = displayEditor;

        var confirmBtn = document.getElementById("confirm");
        var cancelBtn = document.getElementById("cancel");
        var textEditor = document.getElementById("textEditor");

        if(confirmBtn) {
            confirmBtn.addEventListener("click", () => {
                line.innerHTML = textEditor.value;
                this.editBtnFirst.style.display = "block";
                this.editBtnLast.style.display = "block";
                this.addBtn.style.display = "block";
            });
        }

        if(cancelBtn) {
            cancelBtn.addEventListener("click", () => {
                line.innerHTML = text;
                this.editBtnFirst.style.display = "block";
                this.editBtnLast.style.display = "block";
                this.addBtn.style.display = "block";
            });
        }
    }

    createLine(div) {
        var textCreator = document.getElementById("textCreator");
        var displayCreator = "<textarea id='textCreatorInput' style='resize: none;'></textarea><button id='confirm' class='confirmBtn'>Confirm</button><button id='cancel' class='cancelBtn'>Cancel</button>";

        this.addBtn.style.display = "none";
        textCreator.innerHTML = displayCreator;

        var confirmBtn = document.getElementById("confirm");
        var cancelBtn = document.getElementById("cancel");

        if(confirmBtn) {
            confirmBtn.addEventListener("click", () => {
                var newLine = textCreatorInput.value;

                textCreator.innerHTML = "";

                div.insertAdjacentHTML("beforeend" ,"<p id='editable" + this.counter + "' class='parrafoEditable'>" + newLine + "</p><button id='edit" + this.counter + "' class='editBtn'>Edit</button>")

                this.addBtn.style.display = "block";

                this.counter+=1;
                console.log(this.counter);
            });
        }

        if(cancelBtn) {
            cancelBtn.addEventListener("click", () => {
                textCreator.innerHTML = "";
                this.addBtn.style.display = "block";
            });
        }
    }
}
export {Editor};
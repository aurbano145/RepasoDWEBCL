class Calculator {
    btnPlus = document.getElementById("btnPlus");
    btnMinus = document.getElementById("btn1Minus");
    btnEqual = document.getElementById("btnEqual");
    screen = document.getElementById("screen");
    noRecord = document.getElementById("noRecord");
    recordList = document.getElementById("recordList");
 
    num = "";
    symbol = "";
    result = "";
    oldResult = "";

    operationSave = "";

    record = [];
    recordCounter = 0;

    numberGetter(key) {
        this.screen.innerHTML += key;
        this.num += key;
    }

    delete() {
        this.num = "";
        this.symbol = "";
        this.result = "";
        this.oldResult = "";

        this.screen.innerHTML = "";
    }

    addition() {
        if(this.num == "") {
            if(this.oldResult.length > 0) {
                this.symbol = "+";
                this.result = this.oldResult;
                 
                this.screen.innerHTML = this.result + " " + this.symbol + " ";
            } else {
                console.log("There is no number");
            }
        } else if(this.num.length > 0) {
            this.symbol = "+";
            this.result = this.num;
            
            this.screen.innerHTML = this.result + " " + this.symbol + " ";

            this.result = this.num;
            this.num = "";
        }
    }

    substraction() {
        if(this.num == "") {
            if(this.oldResult.length > 0) {
                this.symbol = "-";
                this.result = this.oldResult;

                this.screen.innerHTML = this.result + " " + this.symbol + " ";
            } else {
                console.log("There is no number");
            }
        } else if(this.num.length > 0) {
            this.symbol = "-";
            this.result = this.num;
            
            this.screen.innerHTML = this.result + " " + this.symbol + " ";

            this.result = this.num;
            this.num = "";
        }
    }

    equality() {
        if(this.symbol == "+") {
            this.operationSave = this.result + " " + this.symbol + " " + this.num + " = " + (parseInt(this.result) + parseInt(this.num)).toString();
            this.result = parseInt(this.result) + parseInt(this.num);
        } else if(this.symbol == "-") {
            this.operationSave = this.result + " " + this.symbol + " " + this.num + " = " + (parseInt(this.result) + parseInt(this.num)).toString();
            this.result = parseInt(this.result) - parseInt(this.num);
        }

        this.screen.innerHTML = this.result;
        this.oldResult = this.result.toString();
        
        this.num = "";
        this.result = "";

        this.record.push(this.oldResult);

        this.showRecord();
        this.recordCounter += 1;
    }

    insertResult() {
        if(this.result == "") {
            this.result = this.record[this.recordCounter];
        } else {
            this.num = this.record[this.recordCounter];
        }
    }

    showRecord() {
        if(this.record.length > 0) {
            this.noRecord.style.display = "none";

            this.recordList.insertAdjacentHTML("beforeend", "<li class='recordElem'>" + this.operationSave + " <button id='re" + this.recordCounter + "'>Insert</button></li>");

            document.getElementById("re" + this.recordCounter).addEventListener("click", () => {insertResult()});

            this.operationSave = "";
        }
    }
}

export {Calculator};
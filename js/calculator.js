class Calculator {
    btnPlus = document.getElementById("btnPlus");
    btnMinus = document.getElementById("btn1Minus");
    btnEqual = document.getElementById("btnEqual");
    screen = document.getElementById("screen");
    noRecord = document.getElementById("noRecord");
    recordList = document.getElementById("recordList");

    num1 = "";
    num2 = "";
    symbol = "";
    turn = false;

    recordArray = [];
    record = "";
    counter = 0;

    numberGetter(key) {
        if(!this.turn) {
            this.num1 += key;
        } else {
            this.num2 += key;
        }
        
        this.screen.innerHTML += key;
    }

    delete() {
        this.num1 = "";
        this.num2 = "";
        this.symbol = "";
        this.turn = false;

        this.screen.innerHTML = "";
    }

    addition() {
        if(!this.turn) {
            this.symbol = "+";
            this.screen.innerHTML = this.num1 + " " + this.symbol + " ";
            this.turn = true;
        } else {
            this.saveRecord(this.num1, this.num2, this.symbol);
            this.num1 = (parseInt(this.num1) + parseInt(this.num2)).toString();
            this.symbol = "+";
            this.num2 = "";
            this.screen.innerHTML = this.num1 + " " + this.symbol + " ";
        }
    }

    substraction() {
        if(!this.turn) {
            this.symbol = "-";
            this.screen.innerHTML = this.num1 + " " + this.symbol + " ";
            this.turn = true;
        } else {
            this.saveRecord(this.num1, this.num2, this.symbol);
            this.num1 = (parseInt(this.num1) - parseInt(this.num2)).toString();
            this.symbol = "-";
            this.num2 = "";
            this.screen.innerHTML = this.num1 + " " + this.symbol + " ";
        }
    }

    equality() {
        if(this.turn && this.num2 != "") {
            if(this.symbol == "+") {
                this.saveRecord(this.num1, this.num2, this.symbol);
                this.num1 = (parseInt(this.num1) + parseInt(this.num2)).toString();
            } else if(this.symbol == "-") {
                this.saveRecord(this.num1, this.num2, this.symbol);
                this.num1 = (parseInt(this.num1) - parseInt(this.num2)).toString();
            }
        } else {
            console.log("Enter a value");
        }

        this.screen.innerHTML = this.num1;
        this.num2 = "";
        this.symbol = "";
        this.turn = false;
    }

    saveRecord(oldnum1, oldnum2, oldsymbol) {
        this.recordArray.push((parseInt(this.num1) + parseInt(this.num2)).toString());
        this.record = oldnum1 + " " + oldsymbol + " " + oldnum2 + " = " + (parseInt(oldnum1) + parseInt(oldnum2)).toString();
        this.recordList.insertAdjacentHTML("beforeend", "<li class='recordElem'><button id='recordBtn" + this.counter + "' value=" + this.recordArray[this.counter] + ">" + this.record + "</button></li>");

        this.counter += 1;
    }

    insertRecord(recordValue) {
        if(!this.turn) {
            this.num1 = recordValue.toString();
        } else {
            this.num2 = recordValue.toString();
        }
    }
}

export {Calculator};
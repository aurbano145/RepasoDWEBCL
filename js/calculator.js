class Calculator {
    btnPlus = document.getElementById("btnPlus");
    btnMinus = document.getElementById("btn1Minus");
    btnEqual = document.getElementById("btnEqual");
    screen = document.getElementById("screen");

    num1 = "";
    num2 = "";
    symbol = "";
    turn = false;

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
            this.num1 = (parseInt(this.num1) - parseInt(this.num2)).toString();
            this.symbol = "-";
            this.num2 = "";
            this.screen.innerHTML = this.num1 + " " + this.symbol + " ";
        }
    }

    equality() {
        if(this.turn && this.num2 != "") {
            if(this.symbol == "+") {
                this.num1 = (parseInt(this.num1) + parseInt(this.num2)).toString();
            } else if(this.symbol == "-") {
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
}

export {Calculator};
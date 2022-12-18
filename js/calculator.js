class Calculator {
    btnPlus = document.getElementById("btnPlus");
    btnMinus = document.getElementById("btn1Minus");
    btnEqual = document.getElementById("btnEqual");
    screen = document.getElementById("screen");
 
    num = "";
    symbol = "";
    result = "";
    oldResult = "";

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
            this.result = parseInt(this.result) + parseInt(this.num);
        } else if(this.symbol == "-") {
            this.result = parseInt(this.result) - parseInt(this.num);
        }

        this.screen.innerHTML = this.result;
        this.oldResult = this.result.toString();
        this.num = "";
        this.result = "";

        console.log(this.oldResult);
        console.log(this.num);
        console.log(this.result);
    }
}

export {Calculator};
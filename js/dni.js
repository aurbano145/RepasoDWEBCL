class DNI {
    letterChecker() {
        var message = document.getElementById("message");
        var data = document.getElementById("dni").value;
        var letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

        if(data.length == 9) {
            var checkArray = JSON.stringify(data).split("");
            var numberArray = [];

            for(let i = 0; i < 9; i++) {
                if(!isNaN(checkArray[i])) {
                    numberArray.push(checkArray[i]);
                }
            }

            console.log(numberArray);

            if(numberArray.length < 8) {
                message.innerHTML = "The format entered is wrong";
            } else {
                var number = numberArray.join('');

                number = parseInt(number);

                var remainder = number % 23;
                
                var newLetter = letters[remainder];

                var result = number + newLetter;

                if(data == result) {
                    message.innerHTML = "The DNI entered and his letter match.";
                } else {
                    message.innerHTML = "The DNI entered and his letter don't match. The correct DNI is " + result + ".";
                }
            }
        } else {
            message.innerHTML = "The format entered is wrong";
        }
    }
}
export {DNI};
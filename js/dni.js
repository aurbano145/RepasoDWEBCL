class DNI {
    letterChecker(data) {
        let message = document.getElementById("message");
        if(0 > data.length > 9) {
            message.innerHTML = "The format introduced is wrong";
            console.log("Wrong format");
        } else if(data.length = 9) {
            console.log(data);
            var checkArray = JSON.stringify(data).split('');

            for(i = 0; i < 8; i++) {
                if(typeof checkArray[i] != 'number') {
                    checkArray.splice(i, 1);
                }
            }

            if(checkArray.length < 8) {
                message.innerHTML = "The format introduced is wrong";
            } else {
                var number = checkArray.join('');

                number = parseInt(number);

                var remainder = number % 23;
                console.log(remainder);
            }
        }
    }
}
export {DNI};
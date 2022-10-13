
// Funtion to return whether a string is an operator or not
function isOperator(userInput) {
    isOpr = false;
    switch(userInput) {
        case "+": {
            isOpr = true;
            break;
        }
        case "-": {
            isOpr = true;
            break;
        }
        case "*": {
            isOpr = true;
            break;
        }
        case "/": {
            isOpr = true;
            break;
        }
    }
    return isOpr;
}


// Function to perform calculation with the given numbers and opeator
function calculate(firstNumber , secondNumber , operator) {
    var result = 0;
    switch(operator) {
        case "+" : {
            result = firstNumber + secondNumber;
            break;
        }
        case "-" : {
            result = firstNumber - secondNumber;
            break;
        }
        case "*" : {
            result = firstNumber * secondNumber;
            break;
        }
        case "/" : {
            result = firstNumber / secondNumber;
            break;
        }
    }
    return result;
}

// Function to split the given string into two integer numbers and an operator
function performCalculation(userInput) {
    var firstOperand = "";
    var secondOperand = "";
    var operator = ""
    var i = 0;
    for(; i < userInput.length; i++) {
        if(isOperator(userInput[i])) {
            operator = userInput[i];
            i++;
            break;
        } else {
            firstOperand += userInput[i];
        }
    }

    for(; i < userInput.length; i++) {
        secondOperand += userInput[i];
    }

    var firstNumber = parseFloat(firstOperand);
    var secondNumber = parseFloat(secondOperand);

    var output = calculate(firstNumber , secondNumber , operator);
    return output;
}

// Function to validate the input entered by the user
function displayNumber(number) {

    var querySelector = document.querySelector(".ans-text");
    var lastElement = querySelector.textContent[querySelector.textContent.length - 1];

    if(number === "RESET") {
        operatorCount = 0;
        dotCount = 0;
        querySelector.textContent = "";
    } else if(number === "DEL") {
        if(lastElement === ".")
            dotCount--;
        if(isOperator(lastElement))
            operatorCount--;
        querySelector.textContent = querySelector.textContent.slice(0 , querySelector.textContent.length - 1);
    } else if(number === ".") {
        if(dotCount === 0) {
            dotCount++;
            querySelector.textContent += ".";
        } else {
            alert("Invalid Operation");
        }
    } else if(number === "=") {
        if(operatorCount === 1 && (lastElement !== "." && isOperator(lastElement) !== true)) {
            querySelector.textContent = performCalculation(querySelector.textContent);
            operatorCount = 0;
        } else {
            alert("Invalid Operation");
        }
    } else if(isOperator(number)) {
        if(operatorCount !== 0 || lastElement === "." || querySelector.textContent === "")
            alert("Invalid Operation");
        else {
            dotCount = 0;
            querySelector.textContent += number;
            operatorCount++;
        }
    } else {
        querySelector.textContent += number;
    }
}


// Adding Event Listerners to all the Buttons
var arrayOfButtons = document.getElementsByClassName("btn");
for(var i = 0; i < arrayOfButtons.length; i++) {
    arrayOfButtons[i].addEventListener("click" , function () {
        displayNumber(this.innerHTML);
    });
}

// Add and removing the light theme classes based on the switch checked value
var switchElement = document.getElementsByClassName("switch")[0];
switchElement.addEventListener("click" , function (event) {
	if(event.target.checked === true) {
		document.getElementsByClassName("dark-theme")[0].classList.add("light-theme");
		document.getElementsByClassName("navbar-brand")[0].classList.add("navbar-brand-light");
		document.getElementsByClassName("theme-text")[0].classList.add("theme-text-light");
		document.getElementsByClassName("ans-box")[0].classList.add("ans-box-light");
		document.getElementsByClassName("number-input")[0].classList.add("number-input-light");
		document.getElementsByClassName("keypad")[0].classList.add("keypad-light");
		document.getElementsByClassName("blue-btn")[0].classList.add("green-btn");
		document.getElementsByClassName("blue-btn")[1].classList.add("green-btn");
		document.getElementsByClassName("red-btn")[0].classList.add("orange-btn");

		for(var i = 0; i < document.getElementsByClassName("btn").length; i++)
			document.getElementsByClassName("btn")[i].classList.add("btn-light-mode");

	} else {
		document.getElementsByClassName("dark-theme")[0].classList.remove("light-theme");
		document.getElementsByClassName("navbar-brand")[0].classList.remove("navbar-brand-light");
		document.getElementsByClassName("theme-text")[0].classList.remove("theme-text-light");
		document.getElementsByClassName("ans-box")[0].classList.remove("ans-box-light");
        document.getElementsByClassName("number-input")[0].classList.remove("number-input-light");
		document.getElementsByClassName("keypad")[0].classList.remove("keypad-light");
		document.getElementsByClassName("blue-btn")[0].classList.remove("green-btn");
		document.getElementsByClassName("blue-btn")[1].classList.remove("green-btn");
		document.getElementsByClassName("red-btn")[0].classList.remove("orange-btn");

		for(var i = 0; i < document.getElementsByClassName("btn").length; i++)
			document.getElementsByClassName("btn")[i].classList.remove("btn-light-mode");
	}
});

// To maintain the dot count entered by the user
var dotCount = 0;

// To maintain the operator count entered by the user 
var operatorCount = 0;













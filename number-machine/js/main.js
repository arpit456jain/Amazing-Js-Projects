// Guess = whatever is in the input
const guess = document.getElementById('guessField');
// Button = submit button
const button = document.getElementById('submitguess');

// Click event on submit
button.addEventListener('click', function(e) {
    // prevents page from refreshing
    e.preventDefault();
    // turns user input into an integer
    const input = parseInt(guess.value);
    // stops any massive numbers, also stops decimal numbers
    if (input.toString().length >= 10 || input < 1 || !Number.isInteger(Number(guess.value))) {
        const warning = document.querySelector(".warning");
        warning.classList.add("show");
        setTimeout(function(){
            warning.classList.remove("show");
        },3000);
        return;
    };

    // array of divisors
    const value = makeDivisorArray(input);

    // turns the array into a string
    listOutput = value.join(', ');

    // reduces array to sum of divisors
    const reducedOutput = (value) => {
        let reducedOutput = (value.reduce((acc, curr) => acc + curr));
        return reducedOutput;
    }
    // display all the different outputs
    // document.getElementById("output-prime").innerHTML = capitalizeFirst(testPrime(input));
    const getOutput = document.getElementById.bind(document);
    getOutput("output-prime").innerHTML = capitalizeFirst(testPrime(input));
    getOutput("output-reduced").innerHTML = reducedOutput(value);
    getOutput("output-list").innerHTML = listOutput;
    getOutput("output-pairs-list").innerHTML = outputPairs(value);
    getOutput("output-sqrt").innerHTML = Math.sqrt(input);;
    getOutput("output-squared").innerHTML = Math.pow(input, 2);
    getOutput("output-cbrt").innerHTML = Math.cbrt(input);
    getOutput("output-cubed").innerHTML = Math.pow(input, 3);
});

// This function takes an input number, creates an empty array and loops
// over from 1 until that number, adding divisors to an array
const makeDivisorArray = (input) => {
    // create empty array
    let total = [];
    // loop over each number to find divisors
    for (let i = 1; i <= input; i++) {
        if (input % i === 0) {
            total.push(i);
        };
    };
    return total;
}

// prime number test
const testPrime = (input) => {
    if ( input === 1 ) {
        return ('false');
    } else if ( input === 2 ) {
        return ('true');
    } else {
        for ( let i = 2; i < input; i++ ) {
            if ( input % i === 0 ) {
                return ('false');
            }
        }
    return ('true');
    }
}

// pairs of divisors
const outputPairs = (value) => {
    const { length } = value;
    let output = [];
    for (let i = 0; i <= ((length / 2) - 1); i++) {
        let lastItem = value[(length) - 1 - [i]];
        output.push([`<li>${value[i]} and ${lastItem}</li>`]);
    };
    if (length % 2 !== 0) {
        const squareRoot = Math.sqrt(value[length - 1]);
        output.push([`<li>${squareRoot} and ${squareRoot}</li>`]);
    }
    return output.join("");
}

const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let itMarg = document.getElementsByTagName('code');
for (let i = 0; i < itMarg.length; i++ ){
    if ( itMarg[i].innerHTML == '[i]'){
        itMarg[i].setAttribute("style", "margin: 0 0.2rem");
    }
}

$(document).ready(function() {
    $( ".button" ).click(function() {
        $( ".button" ).addClass( "submitted" );
        setTimeout(function() {
            $( '.button' ).removeClass( 'submitted' );
        },500);
    });
    $(".github").hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});
const currency_type = document.querySelectorAll(".currency_type");
const convert = document.getElementById('convert');
const amount = document.getElementById('amount');
const result = document.getElementById('result');
console.log(amount.value);
// Fetching data from API
fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        display(data);
    });

// display function 
function display(data) {
    const entries = Object.entries(data);
    for (var x = 0; x < entries.length; x++) {
        currency_type[0].innerHTML += `<option value="${entries[x][0]}">${entries[x][0]}</option>`;
        currency_type[1].innerHTML += `<option value="${entries[x][0]}">${entries[x][0]}</option>`;
    }
}

// onclick convert button function
convert.addEventListener("click", () => {
    let currency_type1 = currency_type[0].value;
    let currency_type2 = currency_type[1].value;
    let amt_value = amount.value;

    if (currency_type1 != currency_type2) {
        convert_amt(currency_type1, currency_type2, amt_value);
    }
    else {
        alert("Choose Different Currency Type !!");
    }
});

// covert_amt function
function convert_amt(currency_type1, currency_type2, amt_value) {
    const host = "api.frankfurter.app";
    fetch(
        `https://${host}/latest?amount=${amt_value}&from=${currency_type1}&to=${currency_type2}`
    )
        .then((val) => val.json())
        .then((val) => {
            console.log(Object.values(val.rates)[0]);
            result.value = Object.values(val.rates)[0];
        });
}
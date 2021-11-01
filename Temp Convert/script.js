var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

cel.addEventListener('input', function () {
    let celValue = this.value;
    let kelValue = Number(celValue) + 273.15;
    let fahValue = (celValue * 9 / 5) + 32;
    if (!Number.isInteger(fahValue)) {
        // No. of Digits we want after decimal
        fahValue = fahValue.toFixed(4);
    }
    fah.value = fahValue;
    kel.value = kelValue;
});

fah.addEventListener('input', function () {
    let fahValue = this.value;
    let celValue = (fahValue - 32) * 5 / 9;
    if (!Number.isInteger(celValue)) {
        celValue = celValue.toFixed(4);
    }
    cel.value = celValue;
    let kelValue = Number(celValue) + 273.15;
    kel.value = kelValue;
});

kel.addEventListener('input', function () {
    let kelValue = this.value;
    let celValue = kelValue - 273.15;
    let fahValue = (celValue * 9 / 5) + 32;
    if (!Number.isInteger(fahValue)) {
        // No. of Digits we want after decimal
        fahValue = fahValue.toFixed(4);
    }
    fah.value = fahValue;
    cel.value = celValue;
});


function select() { }
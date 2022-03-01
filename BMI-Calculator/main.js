function calculate() {
    var bmi;
    const result = document.getElementById("result");

    const weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-value").textContent = weight + " kg ";

    const height = parseInt(document.getElementById("height").value);
    document.getElementById("height-value").textContent = height + " cm ";

    bmi = (weight /Math.pow( (height/100), 2)).toFixed(1);
    result.textContent = bmi;

    if (bmi < 18.5) {
        category = "UnderWeight"
        result.style.color = "ffea00"
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal Weight"
        result.style.color = "#00ff00"
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        category = "OverWeight"
        result.style.color = "#ffa500"
    }
    else {
        category = "Obese"
        result.style.color = "#ff0000"
    }

    document.getElementById("category").textContent = category;
}
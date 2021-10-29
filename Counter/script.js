var countInterval;


function startCounter() {

    var number = parseInt(document.getElementById("number").value);

    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if (number < 1 || number > 9) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }

    var currentNo = document.querySelector(".counter .current");
    var nextNo = document.querySelector(".counter .next");
    var count = 0;

    // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(currentNo, nextNo);
    
    // Clears the previous interval that was running
    clearInterval(countInterval);

    countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);

}



function resetNumbers(currentNo, nextNo, end) {
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}



function increaseCount(currentNo, nextNo) {

    nextNo.classList.add("animate");

    setTimeout(function () {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 500);

}

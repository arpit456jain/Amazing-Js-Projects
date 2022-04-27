const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;



function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

function sumDigits(value) {

        sum = 0;

  while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
  }
	return sum;
}

checkBtn.addEventListener("click", () => {
    let n = filterInput;
    console.log(typeof n);


    infoTxt.style.display = "block";
    // if(isString(n)===true){
    //     return infoTxt.innerHTML = `Enter a valid input`
    // }
    // else{
    infoTxt.innerHTML = `Sum Of Digits of <span>'${txtInput.value}'</span> is <span>'${sumDigits(n)}'</span>`;

});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});

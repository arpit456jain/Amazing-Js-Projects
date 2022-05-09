const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;


// javascript program to check if x is a perfect square

// A utility function that returns true if x is perfect square
function isPerfectSquare( x)
{
	let s = parseInt(Math.sqrt(x));
	return (s * s == x);
}

// Returns true if n is a Fibonacci Number, else false
function isFibonacci( n)
{

	// n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
	// is a perfect square
	return isPerfectSquare(5 * n * n + 4) ||
		isPerfectSquare(5 * n * n - 4);
}

function fact(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

function special(value) {

    k=value
    sum = 0;

while (value) {
  sum += fact(value % 10);
  value = Math.floor(value / 10);
}
return (sum==k);
}
// A utility function to test above functions
function isString(value) {
	return typeof value === 'string' || value instanceof String;
}



checkBtn.addEventListener("click", () => {
    let n = filterInput;
    console.log(typeof n);

    console.log(isFibonacci(n));
    infoTxt.style.display = "block";
    // if(isString(n)===true){
    //     return infoTxt.innerHTML = `Enter a valid input`
    // }
    // else{
    if(special(n)===true) {
        return infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is Special number`;
    }
    infoTxt.innerHTML = `NO, <span>'${txtInput.value}'</span> is not a Special number`;

});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});

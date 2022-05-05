const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;


function numSquareSum(n)
{
    var squareSum = 0;
    while (n!= 0)
    {
        squareSum += (n % 10) * (n % 10);
        n = parseInt(n/10);
    }
    return squareSum;
}
  
function isHappynumber(n)
{
    var slow, fast;
  
    //  initialize slow and fast by n
    slow = fast = n;
    do
    {
        //  move slow number
        // by one iteration
        slow = numSquareSum(slow);
  
        //  move fast number
        // by two iteration
        fast = numSquareSum(numSquareSum(fast));
  
    }
    while (slow != fast);
  
    //  if both number meet at 1,
    // then return true
    return (slow == 1);
}
// A utility function to test above functions
function isString(value) {
	return typeof value === 'string' || value instanceof String;
}



checkBtn.addEventListener("click", () => {
    let n = filterInput;
    console.log(typeof n);

    infoTxt.style.display = "block";
    // if(isString(n)===true){
    //     return infoTxt.innerHTML = `Enter a valid input`
    // }
    // else{
    if(isHappynumber(n)===true) {
        return infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is Happy number`;
    }
    infoTxt.innerHTML = `NO, <span>'${txtInput.value}'</span> is not a Happy number`;

});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});

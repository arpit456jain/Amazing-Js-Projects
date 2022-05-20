const txtInput = document.querySelector(".inputs input"),
  checkBtn = document.querySelector(".inputs button"),
  infoTxt = document.querySelector(".info-txt");
let filterInput;

function fact(n) {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else {
    for (var i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}

function special(value) {
  k = value;
  sum = 0;

  while (value) {
    sum += fact(value % 10);
    value = Math.floor(value / 10);
  }
  return sum == k;
}
// A utility function to test above functions
function isString(value) {
  return typeof value === "string" || value instanceof String;
}

checkBtn.addEventListener("click", () => {
  let n = filterInput;
  infoTxt.style.display = "block";
  if (special(n) === true) {
    infoTxt.classList.add("sucess");
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is Special number`;
  }else{
    infoTxt.classList.add("failure");
    infoTxt.innerHTML = `NO, <span>'${txtInput.value}'</span> is not a Special number`;
  }
  id=setTimeout(() => {
    infoTxt.style.display = "none";
    infoTxt.classList.remove("sucess");
    infoTxt.classList.remove("failure");
  }, 3000);
});

txtInput.addEventListener("keyup", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  infoTxt.style.display = "none";
  checkBtn.classList.remove("active");
});

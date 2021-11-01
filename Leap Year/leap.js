


/* core function */
function UserInputChanged(input) {
    console.log(input.value);
    var year = input.value;

    // check for leap year
    // Algorithm based on logic from here - https://en.wikipedia.org/wiki/Leap_year#Algorithm
    var a = year % 4;
    var b = year % 100;
    var c = year % 400;

    /* if (year is not divisible by 4) then (it is a common year)
        else if (year is not divisible by 100) then (it is a leap year)
        else if (year is not divisible by 400) then (it is a common year)
        else (it is a leap year)
    */ 
    var isLeap = (a == 0);
    isLeap = isLeap && (b != 0);
    isLeap = isLeap || (c == 0);

//    var result = (a == 0 || c == 0) ? true : (b == 0);
    console.log ("Is Year " + year + " a leap year? " + isLeap);
    
    document.getElementById("result").innerText = year + " is " + (isLeap ? "a " : " not a") + " leap year";
  }
  
  /*
  */



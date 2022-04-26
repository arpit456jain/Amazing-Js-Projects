var startTime = new Date();
var endTime = new Date();
var startPressed = false;
var bgChangeStarted = false;
var maxWait = 20;
var timerID;
var randMULTIPLIER = 0x015a4e35;
var randINCREMENT = 1;
var today = new Date();
var randSeed = today.getSeconds();
function startTest() {
  document.body.style.background = "crimson";
  bgChangeStarted = true;
  startTime = new Date();
}

function remark(responseTime) {
  var responseString = "";
  if (responseTime < 0.3) {
    responseString = "Dang you defeated Levi!";
  }
  if (responseTime >= 0.3) {
    responseString = "Noice :)";
  }
  if (responseTime >= 0.4) {
    responseString = "Eh...Try harder";
  }

  if (responseTime >= 0.5) {
    responseString = "Keep practicing!";
  }

  if (responseTime >= 0.6) {
    responseString = "lol what was that are you okay?";
  }

  if (responseTime >= 1) {
    responseString = "You sleeping or what?";
  }

  return responseString;
}

function stopTest() {
  if (bgChangeStarted) {
    endTime = new Date();
    var responseTime = (endTime.getTime() - startTime.getTime()) / 1000;

    document.body.style.background = "white";
    console.log(responseTime);
    console.log(document.getElementById("result").textContent);
    document.getElementById("result").textContent =
      "Your response time is " +
      responseTime +
      "," +
      " " +
      remark(responseTime);
    startPressed = false;
    bgChangeStarted = false;
  } else {
    if (!startPressed) {
      // e;
      document.getElementById("result").textContent = "Press Start first";
    } else {
      clearTimeout(timerID);
      startPressed = false;
      document.getElementById("result").textContent =
        "You clicked too soon :( Try Again";
    }
  }
}
function randNumber() {
  randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
  return ((randSeed >> 15) & 0x7fff) / 32767;
}

function startit() {
  document.getElementById("result").textContent = " ";
  if (startPressed) {
    alert("Already started. Press stop to stop");
    return;
  } else {
    startPressed = true;
    timerID = setTimeout("startTest()", 6000 * randNumber());
  }
}

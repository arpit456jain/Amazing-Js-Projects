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
  document.body.style.background = "blue";
  bgChangeStarted = true;
  startTime = new Date();
}

function remark(responseTime) {
  var responseString = "";
  if (responseTime < 0.2) responseString = "Well done!";
  if (responseTime >= 0.3 && responseTime < 0.2) responseString = "Nice!";
  if (responseTime >= 0.4 && responseTime < 0.3)
    responseString = "Could be better...";
  if (responseTime >= 0.5 && responseTime < 0.6)
    responseString = "Keep practicing!";
  if (responseTime >= 0.6 && responseTime < 1)
    responseString = "Have you been drinking?";
  if (responseTime >= 1) responseString = "Did you fall asleep?";

  return responseString;
}

function stopTest() {
  if (bgChangeStarted) {
    endTime = new Date();
    var responseTime = (endTime.getTime() - startTime.getTime()) / 1000;

    document.body.style.background = "white";
    alert(
      "Your response time is: " +
        responseTime +
        " seconds " +
        "\n" +
        remark(responseTime)
    );
    startPressed = false;
    bgChangeStarted = false;
  } else {
    if (!startPressed) {
      alert("press start first to start test");
    } else {
      clearTimeout(timerID);
      startPressed = false;
      alert("cheater! you pressed too early!");
    }
  }
}
function randNumber() {
  randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
  return ((randSeed >> 15) & 0x7fff) / 32767;
}

function startit() {
  if (startPressed) {
    alert("Already started. Press stop to stop");
    return;
  } else {
    startPressed = true;
    timerID = setTimeout("startTest()", 6000 * randNumber());
  }
}

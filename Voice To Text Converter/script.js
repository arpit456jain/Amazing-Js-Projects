var results = document.getElementById("results");
var interim = document.getElementById("interim");

var final_transcript = '';
var interim_transcript = '';

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

var start = function() {
  results.innerHTML = '';
  interim.innerHTML = '';
  final_transcript = '';
  interim_transcript = '';
  recognition.start();
  
  recognition.onresult = function(event) {
    interim_transcript = '';
    
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    results.innerHTML = final_transcript;
    interim.innerHTML = "Currently Saying: " + interim_transcript;
  };
};

var stop = function() {
  recognition.stop();
};

document.getElementById("text-one").onload = function() {myFunction()};
function myFunction() {
  var person = prompt("Please enter your birthday date", "mm/dd");
  if (person != null) {
    const timeLeft = document.getElementById('time-left')

//add you birthday date in month day year format
const birthday = new Date(person+'/2021')



const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId

function countDown() {
  const today = new Date()
  const timeSpan = birthday - today
  //milliseconds
  console.log(timeSpan)

  if (timeSpan <= -day) {
    timeLeft.innerHTML = 'Hope you had a nice Birthday!!'
    clearInterval(timerId)
    return
  }

  if (timeSpan <= 0) {
    timeLeft.innerHTML = 'Happy Birthday!!'
    clearInterval(timerId)
    return
  }


  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan % day) / hour)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)

  timeLeft.innerHTML =
    days + 'days ' + hours + 'hrs ' + minutes + 'mins ' + seconds + 'secs remaining'
}

timerId = setInterval(countDown, second)
  }
}



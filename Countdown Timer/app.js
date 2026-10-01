// Global variables;
let countdownTime = 3600 // 1 hour (in seconds)
let countdownInterval;
let isCountdown = false;

function updateCountdown() {
  const days = Math.floor(countdownTime / (60 * 60 * 24));
  const hours = Math.floor((countdownTime % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countdownTime % (60 * 60)) / (60 * 60));
  const seconds = countdownTime % 60;

  // display the countdown time
  document.getElementById('day').textContent = days + "d";
  document.getElementById('hours').textContent = hours + "h";
  document.getElementById('minutes').textContent = minutes + "m";
  document.getElementById('seconds').textContent = seconds + "s";

  if (countdownTime <= 0) {
    clearInterval(countdownInterval);
    document.getElementById('countTime').innerHTML = `<h2>Time's Up!</h2>`
    document.getElementById('message').textContent = 'The event has started!';
    document.getElementById('startStopBtn').disabled = true;
  }

}

function toggleCountdown() {
  if (isCountdown) {
    clearInterval(countdownInterval);
    document.getElementById('startStopBtn').textContent = 'start';
  } else {
    countdownInterval = setInterval(function () {
      countdownTime--;
      updateCountdown()
    }, 1000)
    document.getElementById('startStopBtn').textContent = 'stop';
  }

  isCountdown = !isCountdown;
}

function openTimeModal() {
  document.getElementById('timeModal').style.display = 'block';
}

function closeTimeModal() {
  document.getElementById("timeModal").style.display = 'none';
}

function setCustomTime() {
  let customTimeValue = document.getElementById('customTime').value;
  console.log(customTimeValue)
  if (customTimeValue && !isNaN(customTimeValue)) {
    countdownTime = parseInt(customTimeValue);
    updateCountdown();
    closeTimeModal();
  } else {
    alert('Please enter valid seconds(number)!')
  }
}

//initial countdown
updateCountdown();
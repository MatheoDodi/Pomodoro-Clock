let seconds = 0;
let minutes = 25;
let timer = document.querySelector("#timer");

function reset() {
	seconds = 0;
	minutes = 25;

}

function checkSecond() {
	
}

function timerFunc() {

	if (minutes < 0) {
		return timer.innerHTML = `DONE`;
	}

	if (minutes === 0 && seconds === 0) {
		return timer.innerHTML = `DONE`;
	} else if (seconds === 0) {
		seconds = 59;
		minutes--;
	} 

	if (seconds.toString().length < 2) {
	timer.innerHTML = `${minutes}:0${seconds}`;
	seconds--;
	} else {
	timer.innerHTML = `${minutes}:${seconds}`;
	seconds--;

	}


}

document.querySelector('#up').addEventListener('click', function() {
	minutes = minutes + 5;
	timer.innerHTML = `${minutes}:${seconds}`;

	})
document.querySelector('#down').addEventListener('click', function() {
	reset();
	timer.innerHTML = `${minutes}:0${seconds}`;
	clearInterval(START_GAME);
	})
document.querySelector('#downfive').addEventListener('click', function() {
	minutes = minutes - 5;
	timer.innerHTML = `${minutes}:${seconds}`;
	
	})
document.querySelector('#start').addEventListener('click', function() {
	START_GAME = setInterval( timerFunc , 1000);
})


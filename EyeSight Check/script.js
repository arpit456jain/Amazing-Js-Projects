var sightA = "able, above, across, almost, always, animal, another, answer, anything, April, around, asked, August";
var sightB = "beautiful, became, because, become, been, before, begin, behind, believe, below, best, better, between, black, blue, both, boy, brother, brown";
var sightC = "can’t, care, carry, catch, change, children, city, class, clean, close, cold, complete";
var sightD = "dark, December, different, does, don’t, door, during";
var sightE = "each, eight, eighteen, eleven, enough, every";
var sightF = "family, farm, fast, father, favorite, February, fifteen, fight, finally, find, first, fish, five, follow, food, form, four, fourteen, Friday, friend, funny";
var sightG = "game, gave, getting, girl, give, goes, going, gone, good, grade, gray, great, green, grew, grey, group, grow";
var sightH = "hand, happy, hard, have, having, head, help, hide, hill, home, house, how, how, hundred";
var sightI = "inside, I’m";
var sightJ = "January, July, jump, June, just";
var sightK = "knew, know";
var sightL = "laugh, learn, light, little, live";
var sightM = "March, May, maybe, Monday, mother, much";
var sightN = "night, nine, nineteen, November";
var sightO = "October, one, only, orange, our, outside";
var sightP = "page, paper, party, people, pick, picture, pink, place, please, point, purple";
var sightQ = "Quack,Quicksilver";
var sightR = "rain, red, right, room, run";
var sightS = "Saturday, school, sea, second, September, seven, seventeen, shape, should, show, sister, six, sixteen, sky, sleep, something, space, stand, start, stay, Sunday, surprise";
var sightT = "take, teach, tell, ten, thank, their, there, they, they’re, things, think, thirteen, three, through, Thursday, together, took, try, Tuesday, twelve, twenty, two";
var sightU = "under, until, use, using";
var sightV = "very, view";
var sightW = "wait, walk, want, watch, Wednesday, week, went, what, when, where, white, who, why, why, winter, work, world, worn, wrong, wrote";
var sightX = "xerox, Xmas";
var sightY = "year, yellow, you’re";
var sightZ = "Zedi,Zone";
var sightAll = sightA + ", " + sightB + ", " + sightC + ", " + sightD + ", " + sightE + ", " + sightF + ", " + sightG + ", " + sightH + ", " + sightI + ", " + sightJ + ", " + sightK + ", " + sightL + ", " + sightM + ", " + sightN + ", " + sightO + ", " + sightP + ", " + sightQ + ", " + sightR + ", " + sightS + ", " + sightT + ", " + sightU + ", " + sightV + ", " + sightW + ", " + sightX + ", " + sightY + ", " + sightZ;
sightAll=sightAll.replace(/, ,/g, "")

var addition1_10 = "0+_=10, 1+_=10, 2+_=10, 3+_=10, 4+_=10, 5+_=10, 6+_=10, 7+_=10, 8+_=10, 9+_=10, 10+_=10, _+0=10, _+1=10, _+2=10, _+3=10, _+4=10, _+5=10, _+6=10, _+7=10, _+8=10, _+9=10, _+10=10";

var cardList = sightAll;
var cardArray = [];
var totalLength = 0;
var correctList = [];
var incorrectList = [];
var card = document.querySelector(".card");
var buttonContainer = document.querySelector(".button-container");
var buttonContainerFinal = document.querySelector(".button-container-final");
var stars = document.querySelector(".stars");
var fill = document.querySelector(".fill");
var starsMask = document.querySelector("#stars-mask");
var correctScore = document.querySelector(".score-correct");
var incorrectScore = document.querySelector(".score-incorrect");
var correctButton = document.querySelector(".correct-button");
var reviewButton = document.querySelector(".review-button");
var cardSelector = document.querySelector("#card-selector");
var timer = document.querySelector(".timer");
var remaining = document.querySelector(".remaining");
var fullscreen = document.querySelector(".fullscreen");
var seconds = 0;
var minutes = 0;
var paused = false;
var interval = 0;

cardSelector.addEventListener("change", cardSelect.bind(this));
timer.addEventListener("click", toggleTimer);
fullscreen.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", onFullscreenChange);

function toggleFullscreen(event) {
	if (document.fullscreen) {
		document.exitFullscreen();
	} else {
		document.documentElement.requestFullscreen();
	}
}
function onFullscreenChange(event) {
	if (document.fullscreen) {
		fullscreen.classList.add("active");
	} else {
		fullscreen.classList.remove("active");
	}
}

function correct() {
	correctList.push(cardArray[0]);
	update();
}

function incorrect() {
	incorrectList.push(cardArray[0]);
	update();
}

function update() {
	correctScore.textContent = correctList.length;
	incorrectScore.textContent = incorrectList.length;
	cardArray.shift();
	remaining.textContent = cardArray.length;

	if (cardArray.length === 0) {
		buttonContainer.style.display = card.style.display = "none";
		stars.style.display = "inline-block";
		buttonContainerFinal.style.display = "flex";
		starsMask.setAttribute("width", correctList.length / totalLength * 100 + "%");
		clearInterval(interval);
		paused = true;
		if (incorrectList.length === 0) {
			reviewButton.style.display = "none";
		}
	} else {
		card.textContent = cardArray[0];
	}
	fill.style.width =
		(correctList.length + incorrectList.length) / totalLength * 100 + "%";
}

function reset(review) {
	cardArray = review ? incorrectList : cardList.replace(/\s/g, "").split(",");
	cardArray = shuffle(cardArray);
	totalLength = cardArray.length;
	remaining.textContent = totalLength;
	card.textContent = cardArray[0];

	correctList = [];
	incorrectList = [];

	correctScore.textContent = 0;
	incorrectScore.textContent = 0;
	fill.style.width = "0%";

	buttonContainer.style.display = "flex";
	card.style.display = "block";
	stars.style.display = "none";
	buttonContainerFinal.style.display = "none";
	reviewButton.style.display = "block";
	clearInterval(interval);
	interval = setInterval(updateTime, 1000);
	paused = false;
	if (!review) {
		seconds = 0;
		minutes = 0;
		updateTime();
	}
}

function cardSelect(event) {
	cardList = this[event.target.value];
	reset();
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function updateTime() {
	var displaySeconds = seconds % 60;
	var displayMinutes = Math.floor(seconds / 60);
	var displaySecondsText = String(displaySeconds).padStart(2, 0);

	timer.textContent = displayMinutes + ":" + displaySecondsText;
	seconds++;
}

function toggleTimer() {
	paused = !paused;
	clearInterval(interval);
	if (!paused) {
		interval = setInterval(updateTime, 1000);
	}
}

reset();

var svg = document.querySelector("svg");
var segment;
var controlA;
var controlB;
var h2 = document.querySelector("h2");
var target;

function draw() {
	var x1 = Math.round(controlA.point.x * window.innerWidth);
	var y1 = Math.round(controlA.point.y * window.innerHeight);
	var x2 = Math.round(controlB.point.x * window.innerWidth);
	var y2 = Math.round(controlB.point.y * window.innerHeight);
	setAttributes(segment, {
		x1: x1,
		y1: y1,
		x2: x2,
		y2: y2
	});
	setAttributes(controlA, {
		cx: x1,
		cy: y1
	});
	setAttributes(controlB, {
		cx: x2,
		cy: y2
	});
	// calculate the distance between x
	var dx = x2 - x1;
	// calculate the distance between y
	var dy = y2 - y1;
	// use pythagoras theorem to find distance
	var distance = Math.sqrt((dx * dx) + (dy * dy));
	h2.innerHTML = "Distance: " + Math.round(distance) + " pixels";
}

function init() {
	segment = createElement("line", {
		class: "segment"
	});
	controlA = createElement("circle", {
		class: "control",
		r: 6
	})
	controlB = createElement("circle", {
		class: "control",
		r: 6
	});
	controlA.point = {
		x: 0.25,
		y: 0.25
	};
	controlB.point = {
		x: 0.75,
		y: 0.75
	};
	svg.appendChild(segment);
	svg.appendChild(controlA);
	svg.appendChild(controlB);
	controlA.addEventListener("mousedown", startDrag);
	controlB.addEventListener("mousedown", startDrag);
	draw();
}

init();
window.onresize = draw;

function startDrag(e) {
	target = e.target;
	window.addEventListener("mousemove", drag);
	window.addEventListener("mouseup", stopDrag);
}

function stopDrag(e) {
	window.removeEventListener("mousemove", drag);
	window.removeEventListener("mouseup", stopDrag);
}

function drag(e) {
	target.point.x = Math.min(Math.max(e.clientX / window.innerWidth, 0), 1);
	target.point.y = Math.min(Math.max(e.clientY / window.innerHeight, 0), 1);
	draw();
}

function setAttributes(element, attributes) {
	var keyword, key;
	for (keyword in attributes) {
		key = keyword.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
		element.setAttributeNS(keyword === "xlink:href" ? "http://www.w3.org/1999/xlink" : null, key, attributes[keyword]);
	}
}

function createElement(type, attributes) {
	var element = document.createElementNS("http://www.w3.org/2000/svg", type);
	setAttributes(element, attributes);
	return element;
}



TweenMax.to([controlA.point,controlB.point],1.5,{x:0.5,y:0.5,onUpdate:draw, yoyo:true,repeat:1,ease:Power2.easeInOut});
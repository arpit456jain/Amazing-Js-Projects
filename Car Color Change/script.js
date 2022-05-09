var cars = document.querySelectorAll(".car");
var inputs = document.querySelectorAll("input");
for(var i=0;i<inputs.length;i++){
	var input = inputs[i];
	var label = input.nextSibling.nextSibling;
	label.style.backgroundColor=input.getAttribute("value");
	input.addEventListener("change", onChangeColor);
}

function onChangeColor(e){
	for(var i=0;i<cars.length;i++){
		var car = cars[i];
		if(car.nodeName =="svg"){
			car.querySelector(".car-paint").style.fill = e.target.getAttribute("value");
		}else{
			car.style.backgroundColor = e.target.getAttribute("value");
		}
		
	}
	
}

onChangeColor({target:document.querySelector("input:checked")});
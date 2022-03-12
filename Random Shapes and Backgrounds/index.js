var cur = "square";

var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];

var color = ['images/gr1.png', 'images/gr2.png',  'images/gr3.png', 'images/gr4.png', 'images/gr5.jpg', 'images/gr6.png', 'images/gr7.png', 'images/gr8.png', 'images/gr9.jpg', 'images/gr10.png', 'images/gr11.png', 'images/gr12.jpg', 'images/gr13.jpg'];

var x = document.getElementsByTagName("BODY")[0];

document.getElementById("shape").onclick = function () {
    var rand = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(cur).setAttribute("id", rand);
    cur = rand;
}

document.getElementById("color").onclick = function () {
    var randColor = color[Math.floor(Math.random() * color.length)];
    document.body.style.backgroundImage = "url("+randColor+")";
}




var colorPicker = new iro.ColorPicker(".colorPicker", {

  width: 280,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#fff" });


var values = document.getElementById("values");
var hexInput = document.getElementById("hexInput");


colorPicker.on(["color:init", "color:change"], function (color) {

  values.innerHTML = [
  "hex: " + color.hexString,
  "rgb: " + color.rgbString,
  "hsl: " + color.hslString].
  join("<br>");

  hexInput.value = color.hexString;
});

hexInput.addEventListener('change', function () {
  colorPicker.color.hexString = this.value;
});
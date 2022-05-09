// Create a new color picker instance
// https://iro.js.org/guide.html#getting-started
var colorPicker = new iro.ColorPicker(".colorPicker", {
  // color picker options
  // Option guide: https://iro.js.org/guide.html#color-picker-options
  width: 280,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#fff" });


var values = document.getElementById("values");
var hexInput = document.getElementById("hexInput");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function (color) {
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
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

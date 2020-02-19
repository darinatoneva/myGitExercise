"use strict";

window.addEventListener("DOMContentLoaded", init);
function init() {
  let colorInput = document.querySelector("#color");
  let hexInput = document.querySelector("#hex");
  let rgbInput = document.querySelector("#rgb");
  let hslInput = document.querySelector("#hsl");
  let chosenColor = colorInput.value;
  let box1 = document.querySelector(".color1");

  //showing the chosen color like HEX, RGB and HSL.
  colorInput.addEventListener("input", () => {
    let chosenHexColor = colorInput.value;
    let chosenRGBColor = hex2rgb(chosenHexColor);
    hexInput.value = chosenHexColor;
    rgbInput.value = "RGB(" + chosenRGBColor.join(",") + ")";
    hslInput.value =
      "HSL(" +
      convertRgbToHsl(chosenRGBColor[0], chosenRGBColor[1], chosenRGBColor[2]) +
      ")";
    document.body.style.backgroundColor = chosenHexColor;
    box1.style.backgroundColor = chosenHexColor;
  });
}
function hex2rgb(hex) {
  var r = parseInt("0x" + hex.substring(1, 3));
  var g = parseInt("0x" + hex.substring(3, 5));
  var b = parseInt("0x" + hex.substring(5, 7));
  return [r, g, b];
}

//converting HEX to RGB
const hexToRgb = hex =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));
//console.log(hexToRgb("#000000")); // [0, 0, 0]
//console.log(hexToRgb("#03f")); // [0, 51, 255]

//converting RGB to HSL
function convertRgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  //console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  return [h, s, l];
}

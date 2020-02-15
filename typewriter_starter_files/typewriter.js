"use strict";
let i = 0;
let txt = "The quick brown fox jumps over the lazy dog"; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demoPosition").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

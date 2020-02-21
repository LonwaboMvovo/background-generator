var _ = require('lodash');

console.log(_);
var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var body = document.getElementById("gradient");

// Setting the linear gradient from color inputs
function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value + "," 
    + color2.value + "," 
    + color3.value 
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);

// setting the linear gradient from button click
var random = document.getElementById("random");
var rgb1 = [];
var rgb2 = [];
var rgb3 = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function setRandGradient() {
    // Try without for loop, I don't think it's needed
    for (var i = 0; i < 3; i++) {
        rgb1[i] = getRndInteger(0,255);
        rgb2[i] = getRndInteger(0,255);
        rgb3[i] = getRndInteger(0,255);
    }

    body.style.background = 
    "linear-gradient(to right, " 
    + "rgb(" + rgb1 + ")," 
    + "rgb(" + rgb2 + ")," 
    + "rgb(" + rgb3 
    + "))";

    css.textContent = body.style.background + ";";
}

random.addEventListener("click", setRandGradient);

// Copy current CSS Background (from W3Schools)
var currentB = document.querySelector("#currentB").innerHTML;
var copy = document.querySelector("#copy");

function copyFunction(currentB) {
    document.execCommand('copy');
}

copy.addEventListener("click", function(ev) {
    copyFunction(currentB)
});
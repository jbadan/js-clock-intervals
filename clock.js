

// function rotateSecondHand(){
//   var secondHand = document.getElementById("second");  
//   var counter = 0;
//   var loop = setInterval(function() {
//       counter++;
//       secondHand.style.transform = "rotate(" + counter + "deg)";
//   }, 1000);
// }

// rotateSecondHand();

// function rotateMinuteHand(){
//   var minuteHand = document.getElementById("minute");
//   var counter = 0;
//   var loop = setInterval(function(){
//     counter+=6; 
//     minuteHand.style.transform = "rotate(" + counter + "deg)";
//   }, 60000); 
// }

// rotateMinuteHand();

// function rotateHourHand(){
//   var hourHand = document.getElementById("hour");
//   var counter = 0;
//   var loop = setInterval(function(){
//     counter+=30;
//     hourHand.style.transform = "rotate(" + counter + "deg)";
//   }, 3.6e+6); 
// }

// rotateHourHand();


//minute * 6 = degrees 
//second  = degrees 
//hour * 30 = degrees

var now = new Date();
var seconds = now.getSeconds();
var minutes = now.getMinutes();
var hours = now.getHours();

var secondHand = document.getElementById("second");  
var minuteHand = document.getElementById("minute"); 
var hourHand = document.getElementById("hour");

function setSecondHand(){
  secondHand.style.transform = "rotate(" + seconds + "deg)";
}
setSecondHand();

function setMinuteHand(){
  minuteHand.style.transform = "rotate(" + (minutes*6) + "deg)";
}
setMinuteHand();

function setHourHand(){
  hourHand.style.transform = "rotate(" + (hours*30) + "deg)";
}
setHourHand();


function moveSecondHand(){
  var counter = seconds;
  setInterval(function(){ 
  counter++;
  secondHand.style.transform = "rotate(" + counter + "deg)";
}, 1000); 
}
moveSecondHand();

function moveMinuteHand(){
  var counter = minutes;
  setInterval(function(){
  counter+=6;
  minuteHand.style.transform = "rotate(" + counter + "deg)";
}, 60000);
}
moveMinuteHand();

function moveHourHand(){
  var counter = hours;
  setInterval(function(){
    counter +=30;
    hourHand.style.transform = "rotate(" + counter + "deg)";
  }, 3.6e+6);
}
moveHourHand();

// function initLocalClocks() {
//   var date = new Date;
//   var seconds = date.getSeconds();
//   var minutes = date.getMinutes();
//   var hours = date.getHours();

var degrees = 1; 


function rotateSecondHand(){
  var secondHand = document.getElementById("second");  
  var counter = 0;
  setInterval(function() {
    counter++;
    secondHand.style.transform = "rotate(" + counter + "deg)";
  }, 1000);
}

rotateSecondHand();

function rotateMinuteHand(){
  var minuteHand = document.getElementById("minute");
  var counter = 0;
  var loop = setInterval(function(){
    counter++
    minuteHand.style.transform = "rotate(" + counter + "deg)";
  }, 60000);
}

rotateMinuteHand();

function rotateHourHand(){
  var hourHand = document.getElementById("hour");
  var counter = 0;
  var loop = setInterval(function(){
    counter++
    hourHand.style.transform = "rotate(" + counter + "deg)";
  }, 3.6e+6);
}

rotateHourHand();

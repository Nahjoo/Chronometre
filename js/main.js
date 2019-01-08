var start = document.querySelector(".start");
start.addEventListener("click", starter);

var terminer = document.querySelector(".stop");
terminer.addEventListener("click", finish);


var time = 0;
var hr = 0;
var min = 0;

var interval = null;
var input = document.querySelector("input");


function finish() {
    clearInterval(interval);
    input.value = "STOP";
}


function chrono() {
    time += parseInt(1) ;
    
    if(time == 60){
        min += 1;
        time = 0; 
    }
    input.value = hr + ": " + min + ": " + time;

    if(min == 60){
        hr += 1;
        min = 0;
    }
}

function starter() {

    interval = setInterval(chrono, 1000);
    start.className = "stop";
    start.innerHTML = "Stop";

}

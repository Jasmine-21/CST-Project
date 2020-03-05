window.onload = function () {
    printTime();
};

function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {

        mins = "0" + mins;
    }
    if (secs < 10) {

        secs = "0" + secs;
    }

    
    document.getElementById("test").innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000);

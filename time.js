function displayTime() {
    var time = new Date();
    document.getElementById("time").innerHTML = time.toLocaleTimeString();
}
setInterval(displayTime, 1000);
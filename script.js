// A function to run on the id - myclockdisplay
function showtime() {
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour -= 12;
        session = "PM";
    }
    hour = (hour < 10) ? "0" + hour : hour;
    mins = (mins < 10) ? "0" + mins : mins;
    sec = (sec < 10) ? "0" + sec : sec;
    var time = hour + ":" + mins + ":" + sec + " " + session;
    // Get the element - myclockdisplay - from the html doc.
    var element = document.getElementById("myclockdisplay");
    element.innerText = time;
    setTimeout(showtime, 1000);
}


showtime();
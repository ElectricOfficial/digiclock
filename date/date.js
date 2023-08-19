function date() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    year = (year < 10) ? "0" + year : year;
    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;
    var result = day + '/' + month + '/' + year
    var element = document.getElementById("datedisplay");
    element.innerText = result;
    setTimeout(showtime, 1000)
}

date();
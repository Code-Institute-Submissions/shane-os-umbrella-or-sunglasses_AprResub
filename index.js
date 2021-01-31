var xmlrequest = new XMLHttpRequest();

xmlrequest.open("GET", "api.openweathermap.org/data/2.5/forecast/daily?id=London&appid=998966fabbbdab57f239ac694a7f1675")
xmlrequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.statusText == 200) {
        document.getElementById("weatherdata").innerHTML = this.responseText;
    }
};
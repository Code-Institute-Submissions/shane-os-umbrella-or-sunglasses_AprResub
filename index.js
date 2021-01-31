var xmlrequest = new XMLHttpRequest();

xmlrequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.statusText == 200) {
        document.getElementById("weatherdata").innerHTML = this.responseText;
    }
};
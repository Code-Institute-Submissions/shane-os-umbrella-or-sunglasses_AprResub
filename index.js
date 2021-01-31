let website = "api.openweathermap.org/data/2.5/forecast/daily?q=London&appid=998966fabbbdab57f239ac694a7f1675";

fetch(website)
    if (this.readyState == 4 && this.status == 200){
        .then(response => response.json())
    };
        .then(function(weather){
            let data = weather.results;
            console.log(data);
        });
        .catch(function(){

        });
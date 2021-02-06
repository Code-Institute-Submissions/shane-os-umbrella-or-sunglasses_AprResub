let website = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=998966fabbbdab57f239ac694a7f1675';

function displayData(data) {
    document.getElementById('cityname').innerHTML = data.name;
    document.getElementById('countryname').innerHTML = data.sys.country;
    document.getElementById('citydescription').innerHTML = data.weather[0].description;
    document.getElementById('weatherconditionsicon').innerHTML = "<img src="+"http://openweathermap.org/img/wn/"+data.weather[0].icon+".png>";
    document.getElementById('citywind').innerHTML = data.wind.speed;
    temperature = parseFloat(data.main.temp) -273.15;
    document.getElementById('citytemp').innerHTML = temperature.toFixed(2)+" Degrees Celcius";
}

function getData() {
    fetch(website)
    .then(response => response.json())
    .then(function(weatherdata){
        console.log(weatherdata);
        displayData(weatherdata);
    })
    .catch(function(error){
        console.log(error);
    });
}

getData();
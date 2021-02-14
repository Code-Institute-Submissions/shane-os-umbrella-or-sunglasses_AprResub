const website = 'https://api.openweathermap.org/data/2.5/weather?q='
const appid = '998966fabbbdab57f239ac694a7f1675'
const tempconv = -273.15;

search.addEventListener("click", function(){
    let city = document.getElementById('searchweather').value;
    citydata = website+city+'&appid='+appid;
    getData(citydata);
})



function displayData(data) {
    document.getElementById('cityname').innerHTML = data.name;
    document.getElementById('countryname').innerHTML = data.sys.country;
    datetime = Date(data.dt);
    document.getElementById('countryname').innerHTML = datetime;
    document.getElementById('citydescription').innerHTML = data.weather[0].description;
    document.getElementById('weatherconditionsicon').innerHTML = "<img src="+"http://openweathermap.org/img/wn/"+data.weather[0].icon+".png>";
    windspeedhour = parseFloat(data.wind.speed)*((60*60)/1000);
    document.getElementById('citywind').innerHTML = windspeedhour.toFixed(2)+"Km/hr";
    kelvintemp = parseFloat(data.main.temp);
    displaytemperature = tempCalculation(kelvintemp);
    document.getElementById('citytemp').innerHTML = displaytemperature.toFixed(2)+" °C";
}

function tempCalculation(temp){
    kelvin = temp
    celcius = temp + tempconv;
    fahrenheit = (temp + tempconv) * 9/5 + 32;
    return celcius;
}

function invalidLocation() {
    alert("Location Name Invalid!");
}

function getData() {
    fetch(citydata)
    .then(response => response.json())
    .then(function(weatherdata){
        console.log(weatherdata);
        displayData(weatherdata);
    })
    .catch(function(error){
        console.log(error);
        invalidLocation()
    });
}
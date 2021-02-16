const website = 'https://api.openweathermap.org/data/2.5/weather?q=';
const appid = '998966fabbbdab57f239ac694a7f1675';
const tempconv = -273.15;

// Weather Guidance 
const lowtemperature = 5;
const hightemperature = 20;
const strongwinds = 20;

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
    weatherIconsDisplay(displaytemperature, windspeedhour);
}

function tempCalculation(temp){
    kelvin = temp;
    celcius = temp + tempconv;
    fahrenheit = (temp + tempconv) * 9/5 + 32;
    return celcius;
}

function invalidLocation() {
    alert("Location Name Invalid!");
}
function weatherIconsDisplay(temperature, windspeed) {
    if (temperature < lowtemperature) {
        document.getElementById('temperatureicon').innerHTML = '<i class="fas fa-temperature-low"></i>'
    }
    else if (temperature > hightemperature) {
        document.getElementById('temperatureicon').innerHTML = '<i class="fas fa-temperature-high"></i>'
    }
    else {
        document.getElementById('temperatureicon').innerHTML = '<i class="fas fa-thermometer-half"></i>'
    };
    
    if (windspeed > strongwinds) {
        document.getElementById('windspeedicon').innerHTML = '<i class="fas fa-wind"></i>'
    }
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
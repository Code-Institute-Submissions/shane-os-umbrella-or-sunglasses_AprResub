//  Open Weather Map URL
const website = 'https://api.openweathermap.org/data/2.5/weather?q=';
const appid = '998966fabbbdab57f239ac694a7f1675';

// Temperature Conversion Value
const tempconv = -273.15;

// Weather Guidance 
const lowtemperature = 5;
const hightemperature = 20;
const strongwinds = 20;

const citynameRef = document.querySelector('#cityname');
const countrynameRef = document.querySelector('#countryname');
const citydescriptionRef = document.querySelector('#citydescription');
const weatherconditionsiconRef = document.querySelector('#weatherconditionsicon');
const temperatureiconRef = document.querySelector('#temperatureicon');

// Location Search Bar Listener
search.addEventListener("click", function(){
    let city = document.getElementById('searchweather').value;
    citydata = `${website}${city}&appid=${appid}`;
    getData(citydata);
})

// Conversion of JSON Records to HTML
function displayData(data) {
    citynameRef.innerHTML = data.name;
    countrynameRef.innerHTML = data.sys.country;
    datetime = Date(data.dt);
    document.getElementById('datetime').innerHTML = datetime;
    citydescriptionRef.innerHTML = data.weather[0].description;
    weatherconditionsiconRef.innerHTML = "<img src="+"http://openweathermap.org/img/wn/"+data.weather[0].icon+".png>";
    windspeedhour = parseFloat(data.wind.speed)*((60*60)/1000);
    document.getElementById('citywind').innerHTML = windspeedhour.toFixed(2)+"Km/hr";
    kelvintemp = parseFloat(data.main.temp);
    displaytemperature = tempCalculation(kelvintemp);
    document.getElementById('citytemp').innerHTML = displaytemperature.toFixed(2)+" °C";
    feelsliketemp = parseFloat(data.main.feels_like);
    feelsliketempdisplay = tempCalculation(feelsliketemp)
    document.getElementById('temperaturefeels').innerHTML = feelsliketempdisplay.toFixed(2)+" °C";
    weatherid = data.weather[0].id;
    weatherIconsDisplay(displaytemperature, windspeedhour, weatherid);
}

// Temperature Standard Conversion
function tempCalculation(temp){
    kelvin = temp;
    celcius = temp + tempconv;
    fahrenheit = (temp + tempconv) * 9/5 + 32;
    return celcius;
}

// Invalid Location Entry Alert
function invalidLocation() {
    alert("Location Name Invalid!");
}

// Weather Icons Display
function weatherIconsDisplay(temperature, windspeed, weatherid) {
    if (temperature < lowtemperature) {
        temperatureiconRef.innerHTML = '<i class="fas fa-temperature-low fa-3x"></i>'
    }
    else if (temperature > hightemperature) {
        temperatureiconRef.innerHTML = '<i class="fas fa-temperature-high fa-3x"></i>'
    }
    else {
        temperatureiconRef.innerHTML = '<i class="fas fa-thermometer-half fa-3x"></i>'
    };

    if (windspeed > strongwinds) {
        document.getElementById('windspeedicon').innerHTML = '<i class="fas fa-wind fa-3x"></i>'
    };

    if (200 <= weatherid < 600) {
        document.getElementById('attireicon').innerHTML = '<i class="fas fa-umbrella fa-3x"></i>'
    }
    else if (600 <= weatherid < 700) {
        document.getElementById('attireicon').innerHTML = '<i class="fas fa-mitten fa-3x"></i>'
    }
    else if (weatherid == 800) {
        document.getElementById('attireicon').innerHTML = '<i class="fas fa-glasses fa-3x"></i>'
    };
}

// Retrieve Data from Open Weather API
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
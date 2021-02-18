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
const datetimeRef = document.querySelector('#datetime');
const citydescriptionRef = document.querySelector('#citydescription');
const citytempRef = document.querySelector('#citytemp');
const citywindRef = document.querySelector('#citywind');
const weatherconditionsiconRef = document.querySelector('#weatherconditionsicon');
const temperatureiconRef = document.querySelector('#temperatureicon');
const temperaturefeelsRef = document.querySelector('#temperaturefeels');
const mainbackgroundRef = document.querySelector('#weatherphoto');
const weatherdisplayinfoRef = document.querySelector('#weatherdisplayinfo');

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
    datetimeRef.innerHTML = datetime;
    citydescriptionRef.innerHTML = data.weather[0].description;
    weatherconditionsiconRef.innerHTML = "<img src="+"http://openweathermap.org/img/wn/"+data.weather[0].icon+".png>";
    windspeedhour = parseFloat(data.wind.speed)*((60*60)/1000);
    citywindRef.innerHTML = windspeedhour.toFixed(2)+"Km/hr";
    kelvintemp = parseFloat(data.main.temp);
    displaytemperature = tempCalculation(kelvintemp);
    citytempRef.innerHTML = displaytemperature.toFixed(2)+" °C";
    feelsliketemp = parseFloat(data.main.feels_like);
    feelsliketempdisplay = tempCalculation(feelsliketemp)
    temperaturefeelsRef.innerHTML = feelsliketempdisplay.toFixed(2)+" °C";
    weatherid = parseInt(data.weather[0].id);
    weatherdisplayinfoRef.innerHTML = data.weather[0].id;
    weatherIconsDisplay(displaytemperature, windspeedhour, weatherid);
    backgroundPhoto(weatherid);
}

// Weather Image Shown
function backgroundPhoto(weatherref) {
    if (199 < weatherref && weatherref < 300) {
        mainbackgroundRef.src = 'assets/images/lightning.jpg';
    }
    else if (299 < weatherref && weatherref < 600) {
        mainbackgroundRef.src = 'assets/images/moderate-rain.jpg';
    }
    else if (599 < weatherref && weatherref < 700) {
        mainbackgroundRef.src = 'assets/images/snow.jpg';
    }
    else {
        mainbackgroundRef.src = 'assets/images/city.jpg';
    };
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

    if (199 < weatherid && weatherid < 600) {
        document.getElementById('attireicon').innerHTML = '<i class="fas fa-umbrella fa-3x"></i>'
    }
    else if (599 < weatherid && weatherid < 700) {
        document.getElementById('attireicon').innerHTML = '<i class="fas fa-mitten fa-3x"></i>'
    }
    else {
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
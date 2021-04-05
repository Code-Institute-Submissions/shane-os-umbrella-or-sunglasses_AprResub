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
const citydescriptionRef = document.querySelector('#citydescription');
const citytempRef = document.querySelector('#citytemp');
const citywindRef = document.querySelector('#citywind');
const weatherconditionsiconRef = document.querySelector('#weatherconditionsicon');
const temperatureiconRef = document.querySelector('#temperatureicon');
const temperaturefeelsRef = document.querySelector('#temperaturefeels');
const mainbackgroundRef = document.querySelector('#weatherphoto');

// Location Search Bar Listener
search.addEventListener("click", function(){
    let city = document.getElementById('searchweather').value;
    validitycheck = locationErrorCheck(city)
    if (validitycheck == "Proceed") {
        citydata = `${website}${city}&appid=${appid}`;
        getData(citydata);
    }
    else {
        invalidLocation(validitycheck)
    }
});

searchweather.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        let city = document.getElementById('searchweather').value;
        validitycheck = locationErrorCheck(city);
        if (validitycheck == "Proceed") {
            citydata = `${website}${city}&appid=${appid}`;
            getData(citydata);
        }
        else {
            invalidLocation(validitycheck);
        }
    }
});

// Error Checking
function locationErrorCheck(city){
    if (city == "" ) {
        validitycheck = "Empty";
        return validitycheck;
    }
    else {
        validitycheck = "Proceed";  
        return validitycheck;
    }
}

// Conversion of JSON Records to HTML
function displayData(data) {
    citynameRef.innerHTML = data.name + ', ' + data.sys.country;
    citydescriptionRef.innerHTML = data.weather[0].description;
    weatherconditionsiconRef.innerHTML = "<img src="+"http://openweathermap.org/img/wn/"+data.weather[0].icon+".png>";
    windspeedhour = parseFloat(data.wind.speed)*((60*60)/1000);
    citywindRef.innerHTML = "Wind Speed: " + windspeedhour.toFixed(2)+"Km/hr";
    kelvintemp = parseFloat(data.main.temp);
    displaytemperature = realTempCalculation(kelvintemp);
    citytempRef.innerHTML = displaytemperature;
    feelsliketemp = parseFloat(data.main.feels_like);
    feelsliketempdisplay = feelsLikeTempCalculation(feelsliketemp);
    temperaturefeelsRef.innerHTML = "Reel Temperature Feels Like: " + feelsliketempdisplay;
    weatherid = parseInt(data.weather[0].id);
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
    }
} 

// Real Temperature Standard Conversion
function realTempCalculation(temp){
    kelvin = temp;
    celcius = temp + tempconv;
    fahrenheit = (temp + tempconv) * 9/5 + 32;
    celcius = celcius.toFixed(2)+" °C";
    fahrenheit = fahrenheit.toFixed(2)+" °F";
    kelvin = kelvin.toFixed(2)+" K";
    realtemprecords = [celcius,fahrenheit,kelvin];
    return celcius;
}

// Feels Like Temperature Standard Conversion
function feelsLikeTempCalculation(temp){
    kelvin = temp;
    celcius = temp + tempconv;
    fahrenheit = (temp + tempconv) * 9/5 + 32;
    celcius = celcius.toFixed(2)+" °C";
    fahrenheit = fahrenheit.toFixed(2)+" °F";
    kelvin = kelvin.toFixed(2)+" K";
    feelstemprecords = [celcius,fahrenheit,kelvin];
    return celcius;
}

// Invalid Location Entry Alert
function invalidLocation() {
    Swal.fire({
        title: 'Invalid City Name',
        text: "Please do not use special characters or numbers when entering a city into the searchbar.",
        icon: 'error',
        confirmButtonText: 'Close'
    });
    document.getElementById('searchweather').value = "";
}
// Weather Icons Display
function weatherIconsDisplay(temperature, windspeed, weatherid) {
    if (temperature < lowtemperature) {
        temperatureiconRef.innerHTML = '<i class="fas fa-temperature-low fa-3x"></i>';
    }
    else if (temperature > hightemperature) {
        temperatureiconRef.innerHTML = '<i class="fas fa-temperature-high fa-3x"></i>';
    }
    else {
        temperatureiconRef.innerHTML = '<i class="fas fa-thermometer-half fa-3x"></i>';
    }

    if (windspeed > strongwinds) {
        document.getElementById('windspeedicon').innerHTML = '<i class="fas fa-wind fa-3x"></i>';
    }

    if (199 < weatherid && weatherid < 600) {
        document.getElementById('attireicon').innerHTML = '<i class="fas fa-umbrella fa-3x"></i>';
    }
    else if (599 < weatherid && weatherid < 700) {
        document.getElementById('attireicon').innerHTML = '<i class="fas fa-mitten fa-3x"></i>';
    }
    else {
        document.getElementById('attireicon').innerHTML = '<i class="fas fa-glasses fa-3x"></i>';
    }
}

// Retrieve Data from Open Weather API
function getData() {
    fetch(citydata)
    .then(response => response.json())
    .then(function(weatherdata){
        displayData(weatherdata);
    })
    .catch(function(){
        invalidLocation();
    });
}

// Change Temperature Measurement
function metricvalue(){
    chosen = document.getElementsByName('metrics');
    for(i = 0; i < chosen.length; i++) {
        if(chosen[i].checked)
        tempmetric = i;
    };
    if (tempmetric == 0) {
        citytempRef.innerHTML = realtemprecords[0];
        temperaturefeelsRef.innerHTML = "Reel Temperature Feels Like: " + feelstemprecords[0];
    }
    else if (tempmetric == 1) {
        citytempRef.innerHTML = realtemprecords[1];
        temperaturefeelsRef.innerHTML = "Reel Temperature Feels Like: " + feelstemprecords[1];
    }
    else {
        citytempRef.innerHTML = realtemprecords[2];
        temperaturefeelsRef.innerHTML = "Reel Temperature Feels Like: " + feelstemprecords[2];
    }
}

let website = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=998966fabbbdab57f239ac694a7f1675';

function displayData(data) {
    document.getElementById('citydescription').innerHTML = data.weather[0].description;
    document.getElementById('citywind').innerHTML = data.wind.speed;
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
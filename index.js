let website = "api.openweathermap.org/data/2.5/forecast?q=London&appid=998966fabbbdab57f239ac694a7f1675";

function displayData(){
    let conditions = displayData();
    let weatherdata = document.querySelector('.weatherdata');
    weatherdata.innerHTML = conditions;
}

function getData(){
    fetch(website)
    if (this.readyState == 4 && this.status == 200){
        .then(response => response.json())
    };
    .then(function(weather){
        let data = weather.results;
        console.log(data);
        return data;
    });
    .catch(function(error){
        console.log(error);
    });
}

displayData();
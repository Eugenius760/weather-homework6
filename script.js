$(document).ready(function () {
    var citySearch;
    var apiKey = "13bd68f2e3fc3483173bb53558abd777"
    var weatherDis = ".weather-dis"

    $(".search-card").on("click", "#button-addon2", function () {
    citySearch = $(".type-in").val();
    var queryURLfor = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey;
    var queryURL5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + apiKey;
    //console.log(queryURL5)
    

        $.ajax({
            url: queryURL5,
            method: "GET",
        }).then(function (response) {
            console.log(response);
        });

        $.ajax({
            url: queryURLfor,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            var queryUV = "api.openweathermap.org/data/2.5/uvi?" + apiKey + "lat=" + lati + "&lon=" + loni
            var lati = respnonse.coord.lat
            var row = $("<tr>");
            var cell = $("<td>");
            var weath = $("<h3>").html(response.name);
            var temperture = $("<p>").text("Temperture: " + response.main.temp)
            var humid = $("<p>").text("Humidity: " + response.main.humidity)
            var wind = $("<p>").text("Wind Speed: " + response.wind.speed)
            row.append(cell);
            cell.append(weath);
            cell.append(temperture);
            cell.append(humid);
            cell.append(wind);
            
            $(weatherDis).append(row)
            console.log(response.name);
        });

        $.ajax({
            url: queryUV,
            method: "GET",
        }).then(function (response) {
            console.log(response)
        })
      

    })

})
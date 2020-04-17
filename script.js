$(document).ready(function () {
    
    var citySearch;
    var apiKey = "13bd68f2e3fc3483173bb53558abd777"

    console.log(window.localStorage.getItem("citySearch"));
    var searchHist = $("<tr>").text(window.localStorage.getItem("citySearch"));
    $(".city-text").append(citySearch);
    $(".search-card").on("click", "#button-addon2", function () {
    citySearch = $(".type-in").val();
    var queryURLfor = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey;
    var queryURL5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + apiKey;
    //var queryUV = "api.openweathermap.org/data/2.5/uvi?" + apiKey + "lat=" + lati + "&lon=" + loni;
    //console.log(queryURL5)
    
       
        $.ajax({
            url: queryURL5,
            method: "GET",
        }).then(function (response) {
            console.log(response);

            for (i = 0; i < response.list.length && i <= 4; i++) {
               console.log(response.list[i])

            }

            var five = $("<div>")

            var temp5 = (response.list[i].main.temp - 273.15) * 1.80 + 32;
            console.log(temp5)


        });

        $.ajax({
            url: queryURLfor,
            method: "GET",
        }).then(function (response) {
            console.log(response);

           var showWeath = $("<div>");
            // var row = $("<tr>");
            // var cell = $("<td>");
            var weath = $("<h3>").text(response.name);
            showWeath.append(weath);

            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            var temperture = $("<p>").text("Temperture: " + tempF.toFixed(1));
            showWeath.append(temperture);

            var humid = $("<p>").text("Humidity: " + response.main.humidity)
            showWeath.append(humid);

            var wind = $("<p>").text("Wind Speed: " + response.wind.speed);
            showWeath.append(wind)
            // row.append(cell);
            // cell.append(weath);
            // cell.append(temperture);
            // cell.append(humid);
            // cell.append(wind);
            
            $(".today").append(showWeath)
            console.log(response.name);
            window.localStorage.setItem("citySearch", citySearch)
        });


        //var queryUV = "api.openweathermap.org/data/2.5/uvi?" + apiKey + "lat=" + lati + "&lon=" + loni
        // $.ajax({
        //     url: queryUV,
        //     method: "GET",
        // }).then(function (response) {
        //     console.log(response);
        //     //var queryUV = "api.openweathermap.org/data/2.5/uvi?" + apiKey + "lat=" + lati + "&lon=" + loni;
        //     var lati = respnonse.coord.lat;
        // })
      

    })

})
$(document).ready(function () {
    var citySearch;
    var apiKey = "13bd68f2e3fc3483173bb53558abd777"

    $(".search-card").on("click", "#button-addon2", function () {
    citySearch = $(".type-in").val();
    var queryURLfor = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey;
    var queryURL5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=" + apiKey;
    console.log(queryURL5)

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
            var row = $("<tr>");
            var cell = $("<td>");
            var weath = $("<h3>").html(queryURLfor.sys.name);
            row.append(cell);
            cell.append(weath);
        });

    })

})
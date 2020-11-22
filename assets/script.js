
function updatePage() {

    var city = $("#city-input").val().trim();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=b37e67307a0d4c3794698572239beb86";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);

        var name = response.name;

        var date = " (" + moment().format('l') + ")";

        // var icon = response.weather[0].icon;

        var cityH2 = $("<h2>").text(name + date);

        // var iconImgEl = $("<img>").attr("src", icon);

        var tempF = parseInt((response.main.temp - 273.15) * 1.80 + 32);

        var tempP = $("<p>").text("Tempature: "+ tempF + "°");

        var humidity = response.main.humidity;

        var humidityP = $("<p>").text("Humidity: " + humidity + "%");

        var windSpeed = response.wind.speed;

        var windSpeedP = $("<p>").text("Wind Speed: " + windSpeed + " MPH");

        var lat = response.coord.lat;

        var lon = response.coord.lon;

        var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=b37e67307a0d4c3794698572239beb86";

        $("#current").append(cityH2);
        // $("#current").append(iconImgEl);

        $("#current").append(tempP);

        $("#current").append(humidityP);

        $("#current").append(windSpeedP);
        
        $.ajax({
            url: uvIndexURL,
            method: "GET"
        }).then(function(response) {   
            console.log(response);

            var uvIndex = response.value;

            var UvIndexSpan = $("<span>").text(uvIndex);

            var uvIndexP = $("<p>").text("UV Index: ");

            $(uvIndexP).append(UvIndexSpan);

            $("#current").append(uvIndexP);
        })
    }
    );
    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=b37e67307a0d4c3794698572239beb86";

    $.ajax({
        url: fiveDayUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        for (var i = 2; i < 40; i++) {
            
            if (i === 2 || i === 10 || i === 18 || i === 26 || i === 34) {
                console.log(response.list[i]);
            }
        }            
        
    });
}


function clear() {
    $("#current").empty();
}

$("#find-city").on("click", function(event) {
    event.preventDefault();

    clear();
    updatePage();
})

//     var city = $("#city-input").val().trim();

//     console.log(city);
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=b37e67307a0d4c3794698572239beb86";

//     function updatePage() {
        
//     }

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(updatePage); 
        // console.log(response);

        // var name = response.name;

        // var date = " (" + moment().format('l') + ")";

        // var cityH2 = $("<h2>").text(name + date);

        // $("#current").append(cityH2);

        // var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // var tempDiv = $("<div>").text("Tempature: "+ tempF);

        // $("#current").append(tempDiv);
    // });
// });

// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Houston&APPID=b37e67307a0d4c3794698572239beb86";

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//       console.log(response);
//   })
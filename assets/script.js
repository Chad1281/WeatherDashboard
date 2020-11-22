
function updatePage() {

    var city = $("#city-input").val().trim();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=b37e67307a0d4c3794698572239beb86";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var name = response.name;

        var date = " (" + moment().format('l') + ")";

        var cityH2 = $("<h2>").text(name + date);

        $("#current").append(cityH2);

        var tempF = parseInt((response.main.temp - 273.15) * 1.80 + 32);

        var tempDiv = $("<div>").text("Tempature: "+ tempF);

        $("#current").append(tempDiv);
    }
    ); 
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
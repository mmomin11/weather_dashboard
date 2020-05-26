// create variable to store input value from user
let city = $("#searchTerm").val();
// store API key as global variable
const apiKey = "&appid=6bc6560db648e64c5a619a98493d462e";

let date = new Date();

$("#searchTerm").keypress(function(event) { 
	
	if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchBtn").click(); 
	} 
});

// get value from users input
$("#searchBtn").on("click", function() {

	$('#forecastH5').addClass('show');
  
	city = $("#searchTerm").val();
	
	// clear input box intiially
	$("#searchTerm").val("");  

// Query URL call variable.
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

// use ajax to get the information needed from the api to display on the screen. 
$.ajax({
    url: queryUrl,
    method: "GET"
  })
  .then(function (response){

    console.log(response)

    console.log(response.name)
    console.log(response.weather[0].icon)

    let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    console.log(Math.floor(tempF))

    console.log(response.main.humidity)

    console.log(response.wind.speed)

    getCurrentConditions(response);
    getCurrentForecast(response);
    makeList();

    })
  });

  function makeList() {
    let listItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(listItem);
  }

// function for current conditions

// add attributes to page that need to appended onto the screen. 
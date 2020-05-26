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

// use ajax to get the information needed from the api to display on the screen. 

// function for current conditions

// add attributes to page that need to appended onto the screen. 
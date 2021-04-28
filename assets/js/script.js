function mainLogic() {
	var location = document.getElementById("location"); 
	location.addEventListener("submit", function(event) {
		event.preventDefault();
		var userInputCity = document.getElementById("userinput").value;
		searchWeather(userInputCity);
	});



function searchTrails(city) {
	fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://prescriptiontrails.org/api/filter/?by=city&city=Albuquerque&offset=0&count=6')}`)
		.then(response => {
			if (response.ok) return response.json()
			throw new Error('Network response was not ok.')
		})
		.then(data => console.log(JSON.parse(data.contents)));
};


function searchWeather(city) {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f2843da8657c44c9e4da3ce3f116ee5&units=imperial`)
		.then(response => {
			if (response.ok) return response.json();
			else {
				throw new Error('Network response was not ok.')
			};
		})
		.then(function (responseJSON) {
			console.log('success!', responseJSON.main);
		})
};

};
mainLogic();
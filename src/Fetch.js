export function GetPlaces() {
	const options = {
	  method: "GET",
	  headers: {
		"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
		"X-RapidAPI-Key": "2fddcac68bmsh10f58f071b54781p1cfcf4jsna888d8f06f1b"
	  }
	};
	return fetch(
	  "https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=eiffel%20tower&lang=en_US&units=km",
	  options
	)
	  .then((response) => response.json())
	  .catch((err) => console.error(err));
  }
  // 2fddcac68bmsh10f58f071b54781p1cfcf4jsna888d8f06f1b
export function GetPlaces() {
	const options = {
	  method: "GET",
	  headers: {
		"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
		"X-RapidAPI-Key": ""
	  }
	};
	return fetch(
	  "https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=eiffel%20tower&lang=en_US&units=km",
	  options
	)
	  .then((response) => response.json())
	  .catch((err) => console.error(err));
  }
  // 7c184f1ba1msh2a2ffd2424ff6d6p18e5adjsn7f2098f2ed0e
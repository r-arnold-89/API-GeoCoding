let latLong = { 
    apiKey: "3b016e991f1f94a3211367c982c34950",
    returnLatLong: function(city) {
        fetch (
            "https://api.openweathermap.org/geo/1.0/direct?q="
            + city 
            + "&limit=5&appid="
            + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayLatLong(data));
    },
    displayLatLong: function(data) {
        const { name } = data[0];
        const { lat } = data[0];
        const { lon } = data[0];
        const { country } = data[0];

        document.querySelector(".place").innerHTML = name;
        document.querySelector(".latitude").innerHTML = "Latitude: " + lat;
        document.querySelector(".longitude").innerHTML = "Longitude: " + lon;
        document.querySelector(".country").innerHTML = "Country Code: " + country;
    },
    search: function () {
        this.returnLatLong(document.querySelector(".search-bar").value);
    },
};


document.querySelector(".search button").addEventListener("click", function() {
    latLong.search();
});

document.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        latLong.search();
    }   
});

//latLong.returnLatLong("london");
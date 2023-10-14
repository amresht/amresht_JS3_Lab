
// OpenWeatherMap API Key (replace with your own)
const apiKey = "11e90f39e054073fcb532de1acf23e2b";

const cityInput = document.getElementById("cityInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherInfo = document.getElementById("weatherInfo");

getWeatherButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (city === "") {
        alert("Please enter a city.");
        return;
    }

    // Make an API request to OpenWeatherMap
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Handle the weather data
            const temperature = data.main.temp - 273.15; // Convert to Celsius
            const weatherDescription = data.weather[0].description;
            const cityName = data.name;

            // Display the weather information
            const weatherHTML = `
            <h2>Weather in ${cityName}</h2>
            <p>Temperature: ${temperature.toFixed(2)}°C</p>
            <p>Description: ${weatherDescription}</p>
          `;
            weatherInfo.innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error("Unable to get weather data:", error);
            weatherInfo.innerHTML = "Error getting weather data.";
        });
});

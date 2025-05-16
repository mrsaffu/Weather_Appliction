import { useState } from "react";
import "./StyleCss/WeatherApi.css";
function WeatherApi() {
  let [city, setcity] = useState("");
  let [weatherInfo, setWeatherInfo] = useState(null);

  let weatherApis = async () => {
    let apiKey = "e5561f93cd832399aeeea10f6f8f61ac";
    // https://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${apiKey}&units=metric

    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    setWeatherInfo(data);
    console.log(city);
  };

  return (
    <>
      <div className="input-container">
        {/* <h1>Weather Details</h1> */}
        <input
          type="text"
          placeholder="Enter You city Name"
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
        <button onClick={weatherApis}>Get Weather</button>
      </div>

      <div>
        {weatherInfo && (
          <>
            <div className="weather-container">
              <div className="location">
                {weatherInfo.name} {weatherInfo.sys.country}
              </div>
              <div className="temperature">
                {weatherInfo.main.temp} &deg;C
                <p>Temperatur</p>
              </div>
              <div className="tempOtherDetails">
                <h4>RealFeal : {weatherInfo.main.feels_like} &deg;C </h4>
                <h4>Humidity : {weatherInfo.main.humidity} %</h4>
                <h4>Pressure : {weatherInfo.main.pressure} hPa</h4>
                <h4>Wind : {weatherInfo.wind.speed} m/s</h4>
                <h4> Description : {weatherInfo.weather[0].description}</h4>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default WeatherApi;

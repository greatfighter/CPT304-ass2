import React, { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [weatherList, setWeatherList] = useState('');

  const getWeather = () => {
    const url = `https://aerisweather1.p.rapidapi.com/forecasts/${city},${countryCode}?plimit=24`;
    const settings = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9',
        'x-rapidapi-host': 'aerisweather1.p.rapidapi.com',
      },
    };

    fetch(url, settings)
      .then(response => response.json())
      .then(data => {
        const periods = data.response[0].periods;
        const textNew = periods.map(period => `validTime: ${period.validTime}\nminTempC: ${period.minTempC}\nmaxTempC: ${period.maxTempC}`).join('\n');
        setWeatherList(textNew);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} />
      <br />
      <label htmlFor="countryCode">Country Code:</label>
      <input type="text" id="countryCode" value={countryCode} onChange={e => setCountryCode(e.target.value)} />
      <br />
      <button onClick={getWeather}>Get Weather</button>
      <div id="weatherList">Weather List: {weatherList}</div>
    </div>
  );
};

export default App;

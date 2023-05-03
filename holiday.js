import React, { useState } from 'react';

const App = () => {
  const [year, setYear] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [holidayList, setHolidayList] = useState('');

  const getHoliday = () => {
    const url = `https://public-holiday.p.rapidapi.com/${year}/${countryCode}`;
    const settings = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9',
        'x-rapidapi-host': 'public-holiday.p.rapidapi.com',
      },
    };

    fetch(url, settings)
      .then(response => response.json())
      .then(data => {
        const text = JSON.stringify(data, null, 4);
        setHolidayList(text);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <label htmlFor="year">Year:</label>
      <input type="number" id="year" value={year} onChange={e => setYear(e.target.value)} />
      <br />
      <label htmlFor="countryCode">Country Code:</label>
      <input
        type="text"
        id="countryCode"
        value={countryCode}
        onChange={e => setCountryCode(e.target.value)}
      />
      <br />
      <button onClick={getHoliday}>Get Holiday</button>
      <div id="holidayList">Holiday List: {holidayList}</div>
    </div>
  );
};

export default App;

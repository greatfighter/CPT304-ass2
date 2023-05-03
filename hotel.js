import React, { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');
  const [hotelList, setHotelList] = useState('');

  const getHotels = () => {
    const url = `https://hotels4.p.rapidapi.com/locations/search?query=${city}&locale=en_US`;
    const settings = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9',
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
      },
    };

    fetch(url, settings)
      .then(response => response.json())
      .then(data => {
        const hotelList = JSON.stringify(data.suggestions[1], null, 4);
        setHotelList(hotelList);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <label htmlFor="city">City:</label>
      <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)} />
      <br />
      <button onClick={getHotels}>Get Hotels</button>
      <div id="hotelList">Hotel List: {hotelList}</div>
    </div>
  );
};

export default App;

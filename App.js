import React from 'react';
import HotelInformation from './hotel';
import HolidayInformation from './holiday';
import WeatherInformation from './weather';

const App = () => {
    return (
        <div>
            <HolidayInformation />
            <HotelInformation />
            <WeatherInformation />
        </div>
    );
}

export default App;

import React from 'react';
import './Conditions.css'


function Conditions(props) {
    return (
        <div className="wrapper">
            {props.error && <small className="small">Please enter a valid city.</small>}
            {props.loading && <div className="loader">Loading...</div>}
            {props.responseObj.cod === 200 ?
                <div>
                    <p className="city"><strong>{props.responseObj.name}</strong></p>
                    <p className="weather">It is currently {Math.round(props.responseObj.main.temp)} degrees in {props.responseObj.name}, with {props.responseObj.weather[0].description}.
                        Humidity is {props.responseObj.main.humidity} %. Wind speed is {props.responseObj.wind.speed} m/s.</p>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;

// test({"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":741,"main":"Fog","description":"fog","icon":"50n"}],"base":"stations",
//     "main":{"temp":284.04,"pressure":1011,"humidity":93,"tempmin":280.93,"tempmax":287.04},
//     "visibility":10000,"wind":{"speed":1.5},"clouds":{"all":20},"dt":1570234102,
//     "sys":{"type":1,"id":1417,"message":0.0102,"country":"GB","sunrise":1570255614,"sunset":1570296659},
//     "timezone":3600,"id":2643743,"name":"London","cod":200})
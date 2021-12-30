import React, { useEffect, useState } from 'react'
import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY

const ShowWeater = ({ country }) => {

    const [weather, setWeather] = useState({})

    useEffect(() => {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}`)
            .then(response => {
                setWeather(response.data)
                console.log(response.data)
            })

    }, [country])

    return (
        <div>

            <h2>Weather in {country.capital}</h2>

            <div>
                <b>Temperature: </b> {(weather.main.temp)} Celsius
            </div>

            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            </div>

            <div>
                <b>Wind: </b>{weather.wind.speed}kmh at {weather.wind.deg} degrees
            </div>

        </div>
    )
}

export default ShowWeater

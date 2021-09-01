import React, { useEffect, useState } from "react";
import "./css/style.css";

export default function WeatherApp() {

    const [city, setCity] = useState(null);
    const [searchCity, setSearchCity] = useState("Varanasi");

    useEffect(() => {
        const fetchApi = async () => {
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=ba62bddc6cc8c1f201dfccc3d6522a95`
            const response = await fetch(URL)
            const resJson = await response.json()
            setCity(resJson.main)
        }

        fetchApi();
    }, [searchCity])




    return (
        <div>
            <div className="card">
                <div class="card-header">
                    Weather App
                </div>
                <div className="card-body">
                    <input
                        type="search"
                        placeholder="Enter City Name"
                        onChange={
                            (event) => {
                                setSearchCity(event.target.value)
                            }
                        }
                    />

                    {
                        !city ? (
                            <p>No Data Found</p>
                        ) : (
                            <div className="inner-body">
                                <h2>
                                    <i className="fas fa-street-view"></i>{searchCity}
                                </h2>
                                <h1>{city.temp} &#8451;</h1>
                                <h6>Min: {city.temp_min} &#8451; | Max: {city.temp_max} &#8451;</h6>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
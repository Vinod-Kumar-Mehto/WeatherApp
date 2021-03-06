import React, { useEffect, useState } from "react";
import "./CSS/style.css";


function Weathapp() {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Mumbai")




    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchApi = async () => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c0205dadac67608107be5e9214c85bd3`
                const response = await fetch(url, { method: "GET" });
                const resJson = await response.json();
                setCity(resJson.main)

            }
            fetchApi()
        }, 500);
        return () => clearTimeout(timer);

    }, [search])


    return (
        <>
            <div className="container">
                <input type="search" onChange={(e) => { setSearch(e.target.value) }} value={search}></input>

                {!city ? (<p className="para">No data found</p>) : (
                    <>
                        <div className="display">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>
                                <p>
                                    {search}
                                </p>

                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>
                            <h3 className="max">Min: {city.temp_min}°Cel  | Max: {city.temp_max}°Cel</h3>

                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </>

                )}

            </div>


        </>

    )
}

export default Weathapp;

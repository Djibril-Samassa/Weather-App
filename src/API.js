import { useState, createContext } from "react";
import { CityContext } from "./App";
import Card from "./Components/CityCard"

export const GetCitydata = createContext();

export default function getWeather(city){

let cityData = {}
    
    const value = {
        cityData : cityData,
    }

    return(
    <GetCitydata.Provider value={value}>
        {fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},fr&APPID=c0c82a5a228cd41201702662c5b33e4e`)
        .then((res) => res.json())
        .then((res) =>{
            cityData  = (res);
            console.log(cityData);
            })}
    </GetCitydata.Provider>)}
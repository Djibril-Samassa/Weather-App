import { useContext } from "react";
import { CityContext } from "./App";



export default function getWeather(city){

    let cityData = {}

    return(
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},fr&APPID=c0c82a5a228cd41201702662c5b33e4e`)
    .then((res) => res.json())
    .then((res) =>{
        cityData  = (res);
        console.log(cityData);
    }))}
import { useContext } from "react";
import { CityContext } from "./App";

export default function API(){

    const cityContext = useContext(CityContext);

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=c0c82a5a228cd41201702662c5b33e4e")
    .then((res) => res.json)
    .then((res) =>{

    })
}
import { useContext } from "react";
import { CityContext, FavorisContext, GetWeatherContext} from "../App";
import "../Styles/CityCard.css";
import { GetCitydata } from "../API";

export default function CityCard(){
    
    {/*Import des Context de App.js*/}
    const getWeather = useContext(GetWeatherContext);
    const cityContext = useContext(CityContext);
    const favoriContext = useContext(FavorisContext);
    const getCityData = useContext(GetCitydata);

    return(
        <h1> Yo</h1>
    )

}
import "../App.css";
import getWeather from "../API";
import { useContext } from "react";
import { CityContext } from "../App";
import "../Styles/Home.css"

export default function Acceuil(){

    const cityContext = useContext(CityContext);

    return(
        <div className="page-component">

            <h1 className="pageName">Acceuil</h1>
            <h3 className="input-indic">Chercher la météo d'une ville</h3>
            <form onSubmit={() =>getWeather(cityContext.cityName)}>
            {/* Création de l'input pour cherhcer une ville */}
            <input type="text"placeholder="Entrez le nom d'une ville" onChange={(e) => cityContext.setName(e.target.value)}/>
            <input type="submit" value="Chercher"/>
            </form>
            {console.log()}
        </div>
    )
}
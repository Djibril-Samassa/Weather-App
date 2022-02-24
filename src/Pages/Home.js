import "../App.css";
import { useContext} from "react";
import { CityContext, FavorisContext, GetWeatherContext } from "../App";
import "../Styles/Home.css";
import Card from "../Components/CityCard";

export default function Acceuil(){

    {/*Import des Context de App.js*/}
    const getWeather = useContext(GetWeatherContext);
    const cityContext = useContext(CityContext);
    const favoriContext = useContext(FavorisContext);
    

    return(
            <div className="page-component">

                <h1 className="pageName">Acceuil</h1>
                <h1 className="input-indic">Chercher la météo d'une ville</h1>
                <form onSubmit={getWeather.handleSubmit}>
                {/* Création de l'input pour cherhcer une ville */}
                <input id="citySearchInput" type="text"placeholder="Entrez le nom d'une ville" onChange={(e) => cityContext.setName(e.target.value)}/>
                <div className="container">
                    <input className="fav" type="submit" value="Chercher"/>
                    <button className="fav" onClick={() => favoriContext.addToFavoris(cityContext.cityName)}>Ajouter aux favoris</button>
                </div>
                </form>
            </div>
    )
}
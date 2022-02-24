import "../App.css";
import getWeather from "../API";
import { useContext, createContext, useState } from "react";
import { CityContext } from "../App";
import "../Styles/Home.css"

export const FavorisContext = createContext();

export default function Acceuil(){

    const cityContext = useContext(CityContext);

    let favoris = [];

    const handleSubmit= (e) => {
        e.preventDefault()
        getWeather(cityContext.cityName)
    }

    const addToFavoris =(cityname) =>{
        favoris.push(cityname);
        {console.log(favoris)}
    }

    const value = {
        
    };

    return(
        <div className="page-component">

            <h1 className="pageName">Acceuil</h1>
            <h3 className="input-indic">Chercher la météo d'une ville</h3>
            <form onSubmit={handleSubmit}>
            {/* Création de l'input pour cherhcer une ville */}
            <input id="citySearchInput" type="text"placeholder="Entrez le nom d'une ville" onChange={(e) => cityContext.setName(e.target.value)}/>
            <input id="inputt" type="submit" value="Chercher"/>
            </form>
            <button className="fav" onClick={() => addToFavoris(cityContext.cityName)}>Ajouter aux favoris</button>
        </div>
    )
}
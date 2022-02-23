import "../App.css";
import API from "../API"
import { useContext } from "react";
import { CityContext } from "../App";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../Styles/Home.css"

export default function Acceuil(){

    const cityContext = useContext(CityContext);
    let entre = "";
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

    return(
        <div className="page-component">

            <h1 className="pageName">Acceuil</h1>
            <h3 className="input-indic">Chercher la météo d'une ville</h3>
            <form>
            {/* Création de l'input pour cherhcer une ville */}
            <input type="text"placeholder="Entrez le nom d'une ville" onChange={(e) => cityContext.setName(e.target.value)}/>
            <input type="submit" value="Chercher" onClick={console.log(cityContext.cityName)}/>
            </form>
        </div>
    )
}
import "../App.css";
import { useContext, useState} from "react";
import { FavorisContext } from "../App";

export default function Favoris(){

    {/*Import du favoris Context de Home.js*/}
    const favoriContext = useContext(FavorisContext);

    return(
        <div className="page-component">

            <h1 className="pageName">Favoris</h1>
        </div>
    )
}
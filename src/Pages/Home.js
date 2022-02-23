import "../App.css";
import "../Styles/Home.css"

export default function Acceuil(){
    return(
        <div className="acceuil">
        <h1 className="pageName">Acceuil</h1>
        <h3 className="input-indic">Chercher la météo d'une ville</h3>
        <form>
        {/* Création de l'input pour cherhcer une ville */}
        <input type="text"/>
        <input type="submit" value="Chercher"/>
        </form>
        </div>
    )
}
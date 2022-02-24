import './App.css';
import Card from "./Components/CityCard";
import getWeather from "./API"
import {createContext, useState} from "react";
import Homepage from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';


/* EXPORT DES CONTEXT */
export const CityContext = createContext();
export const FavorisContext = createContext();
export const GetWeatherContext = createContext();

export default function App() { 

  /*  CONTEXT --- POUR --- LA -- FONCTION --- API */
  {/*Appel de la fonction qui fetch le nom de la ville en input*/}
  const handleSubmit= (e) => {
    e.preventDefault();
    getWeather(cityName);
  }

  const weatherValue = {
    handleSubmit:handleSubmit,
  }
  /*  CONTEXT --- POUR --- LA -- FONCTION --- API */

  /*  CONTEXT --- POUR --- HOME.JS*/
  const [cityName, setcityName] = useState("");

  const setName = (name) => {
    setcityName(name)
  }

  const cityValue = {
    cityName : cityName,
    setName : setName,
  };
/*  FIN DU CONTEXT --- POUR --- HOME.JS*/

  

  /*  CONTEXT --- POUR --- FAVORIS.JS*/
  {/* Création du state favoris*/}
  const[favoris, setFavoris] = useState([]);


  {/*Ajout de la ville dans les favoris*/}
    const addToFavoris =(cityname) =>{
      if(favoris.length >=3){
          alert("La liste des favoris est pleine")
      }
      else{
          setFavoris(prevState =>[...prevState, cityname]);}
      };
    
  {/*}


  {/*Assignement du state et de la fonction importée dans le context */}
    const favorisValue = {
        favoris : favoris,
        addToFavoris: addToFavoris,
    };
  /*  FIN DU CONTEXT --- POUR --- FAVORIS.JS*/

  return (
    <CityContext.Provider value={cityValue}>
    <FavorisContext.Provider value={favorisValue}>
    <GetWeatherContext.Provider value={weatherValue}>
      <BrowserRouter>

      {/*Création du Header*/}
      <header className='header'>
            <h2 className='title'>WEATHER APP</h2>
            <nav className='navbar'>
                <Link className="link" to="/">Acceuil</Link>
                <Link className="link" to="/favorites">Favoris</Link>
            </nav>
      </header>
    
      {/*Renseignement des liens */}
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/favorites" component={Favorites}/>
      </Switch>

    {/* Création du footer*/}
    <footer className='footer'>
                <h3>Développé par Djibril Samassa 23/02/2022</h3>
    </footer>

    </BrowserRouter>
    </GetWeatherContext.Provider>
    </FavorisContext.Provider>
    </CityContext.Provider>
    
  );

}
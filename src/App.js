import './App.css';
import {createContext, useState} from "react";
import Homepage from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

export const CityContext = createContext();

export default function App() { 
  const [cityName, setcityName] = useState("");

  const setName = (name) => {
    setcityName(name)
}

  const value = {
    cityName : cityName,
    setName : setName
  };

  return (


    <CityContext.Provider value={value}>
      <BrowserRouter>
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
      {/*Création du Header*/}

    {/* Création du footer*/}
    <footer className='footer'>
                <h3>Développé par Djibril Samassa 23/02/2022</h3>
          </footer>
    </BrowserRouter>
    </CityContext.Provider>
    
  );

}
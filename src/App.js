import './App.css';
import {creatContext, useState} from "react";
import Homepage from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

export default function App() {

  return (
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
  );

}
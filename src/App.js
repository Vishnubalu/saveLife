import logo from './logo.svg';
import logo1 from './icon.png'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from "./Home";
import DisplayCard from "./displayCard";
import {BloodProvider, DetailsProvider} from "./contexts";
import Navbar from "./navbar";
import React from "react";
import Footer from "./footer";
import Registration from "./registration";
import Login from "./login";
import BloodbankSearch from "./bloodbankSearch";
import CardList from "./cardList";
import Patient from "./patient";
import DonorSearch from "./donorSearch";
import Chatbot from "./chatbot";

function App() {
    return (

        <Router>
            <div className='app'>
                <BloodProvider>
                    <Chatbot/>
                    <DetailsProvider>
                        <Navbar/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/card" component={DisplayCard}/>
                        <Route path="/register" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/bloodBank" component={BloodbankSearch}/>
                        <Route exact path="/cardlist" component={CardList}/>
                        <Route exact path="/addpatient" component={Patient}/>
                        <Route exact path="/donorsearch" component={DonorSearch}/>
                        <Footer/>
                    </DetailsProvider>
                </BloodProvider>
            </div>
        </Router>
    );
}

export default App;

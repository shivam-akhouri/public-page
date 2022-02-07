import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Icons from "./components/Icons"; // Whole icons load from Icons.js file.
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

import reportWebVitals from './reportWebVitals';
import Register from './pages/formpage';
import OurTeam from './components/OurTeam';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter basename={"/work/"}> */} {/*Host in sub-directory folder*/}
    <BrowserRouter>  {/*Host in root*/}
                <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/Home">
                {/* <Header /> */}
                <Home />
                {/* <Footer /> */}
            </Route>
            <Route exact path="/AboutUs">
                {/* <Header /> */}
                <AboutUs />
                {/* <Footer /> */}
            </Route>
            <Route exact path="/joinAsTeam">
                {/* <Header /> */}
                <Register />
                {/* <Footer />  */}
            </Route>
            <Route exact path="/OurTeam">
                <OurTeam />
            </Route>
        </Switch>
                <Footer />
    </BrowserRouter>
    <Icons />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
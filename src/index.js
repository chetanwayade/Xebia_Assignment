import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css'
import Login from './Pages/Login'
import PlanetList from './Pages/PlanetList'
import Planet from './Pages/Planet'
import NotFound from './Pages/NotFound'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/list" component={PlanetList} />
            <Route path="/planet" component={Planet} />
            <Route component={NotFound} />
        </Switch>
    </Router>, 
    document.getElementById("app"))
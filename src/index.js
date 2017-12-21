import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from "./components/App";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

const appElement = document.getElementById("app");

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/home" component={Home}/>
        <Route path="*" component={NoMatch}/>
    </Router>,
    appElement
);
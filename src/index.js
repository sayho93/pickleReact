import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from "./components/App";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

import {createStore} from "redux";
import {Provider} from "react-redux";
import userApp from "./Reducers/Reducers";

const store = createStore(userApp);
const appElement = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/home" component={Home}/>
            <Route path="*" component={NoMatch}/>
        </Router>
    </Provider>
    ,
    appElement
);
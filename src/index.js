import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Login from "./components/Login";
import App from "./components/App";

import UserList from "./components/userMenu/UserList";
import ManagerList from "./components/userMenu/ManagerList";
import NoMatch from "./components/NoMatch";

import {createStore} from "redux";
import {Provider} from "react-redux";
import userApp from "./Reducers/Reducers";
const store = createStore(userApp);

const appElement = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Login} />

            <Route path="/user" component={App}>
                <Route path="userList" component={UserList}>
                    <Route path="userInfo" component={App}/>
                </Route>

                <Route path="managerList" component={ManagerList}>

                </Route>
            </Route>


            <Route path="*" component={NoMatch}/>
        </Router>
    </Provider>
    ,
    appElement
);
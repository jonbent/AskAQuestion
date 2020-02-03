import {connect} from "react-redux";
import React, { Component } from 'react';
import { Provider } from "react-redux";
import {HashRouter, Switch} from "react-router-dom";
import '/imports/scss/reset.scss';
import App from './App';
import Splash from './Splash';
import {ProtectedRoute, AuthRoute} from "../util/RouteUtil";
import Navbar from "./navbar/NavbarContainer";
const mapStateToProps = ({session}) => ({
    loggedIn: session.isAuthenticated
});

const Root = ({store, loggedIn}) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Navbar/>
                {/*<Switch>*/}
                    {!loggedIn && <AuthRoute path="/" component={Splash}/>}
                    {loggedIn && <ProtectedRoute path="/" component={App}/>}
                {/*</Switch>*/}
            </HashRouter>
        </Provider>
    );
}

export default connect(mapStateToProps)(Root)
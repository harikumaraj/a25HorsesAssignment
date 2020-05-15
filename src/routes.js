import PropTypes from "prop-types";
import React, { Component } from "react";
import { BackHandler } from "react-native";
import { Router, Scene } from "react-native-router-flux";

import Home from "./containers/Home";
import Login from "./containers/Login";

const propTypes = {
    isLoggedin: PropTypes.bool
};

const defaultProps = {
    isLoggedin: false
};

export default class Routes extends Component {

    handleBackButton = () => {
        BackHandler.exitApp();
        return true;
    }

    render() {
        const { isLoggedin } = this.props;
        return (
            <Router {...this.props} backAndroidHandler={this.handleBackButton}>
                <Scene>
                    <Scene key="auth" hideNavBar={true} initial={isLoggedin}>
                        <Scene key="login" component={Login} />
                    </Scene>
                    <Scene key="app" hideNavBar={true} initial={!isLoggedin}>
                        <Scene key="home" component={Home} />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

Routes.defaultProps = defaultProps;

Routes.propTypes = propTypes;

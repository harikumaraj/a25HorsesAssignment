import React, {Component} from "react";
import {View, Text} from "react-native";

import api from "../../services/api"

import styles from "./styles";

export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
        );
    }
}
import React, {Component} from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';

export default class AppStatusBar extends Component {
    render() {
        return (
            <View style={{ backgroundColor:"black", height: Constants.statusBarHeight }}>
                <StatusBar translucent barStyle="light-content"/>
            </View>
        );
    }
}

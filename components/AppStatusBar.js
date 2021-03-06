import React, {PureComponent} from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';

export default class AppStatusBar extends PureComponent {
    render() {
        return (
            <View style={{ backgroundColor:"black", height: Constants.statusBarHeight }}>
                <StatusBar translucent barStyle="light-content"/>
            </View>
        );
    }
}

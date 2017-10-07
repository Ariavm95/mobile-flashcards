import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View>
                    <Text>Test react-redux setup</Text>
                </View>
            </Provider>
        );
    }
};

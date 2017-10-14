import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import DeckListView from './components/DeckListView';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View>
                    <DeckListView />
                </View>
            </Provider>
        );
    }
};

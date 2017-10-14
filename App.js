import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import DeckListView from './components/DeckListView';
import { Container, Header, Content } from 'native-base';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{
                    flex: 1,
                    alignItems:'center',
                    justifyContent:"center"
                  }}>
                    <DeckListView />
                </View>
            </Provider>
        );
    }
};

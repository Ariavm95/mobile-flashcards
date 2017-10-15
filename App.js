import React from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AppStatusBar from './components/AppStatusBar';
import DeckListNavigator from './components/DeckListNavigator';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <Container style={{flex:1}}>
                    <AppStatusBar />
                    <DeckListNavigator />
                </Container>
            </Provider>
        );
    }
};

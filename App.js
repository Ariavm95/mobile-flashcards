import React from 'react';
import { Container } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AppStatusBar from './components/AppStatusBar';
import DeckListNavigator from './components/DeckListNavigator';
import thunk from 'redux-thunk';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer, applyMiddleware(thunk))}>
                <Container style={{flex:1}}>
                    <AppStatusBar />
                    <DeckListNavigator />
                </Container>
            </Provider>
        );
    }
};

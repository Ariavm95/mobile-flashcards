import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AppStatusBar from './components/AppStatusBar';
import AppTabView from './components/AppTabView';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex:1}}>
                    <AppStatusBar />
                    <AppTabView />
                </View>
            </Provider>
        );
    }
};

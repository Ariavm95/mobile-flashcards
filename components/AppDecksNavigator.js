import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppRootNavigator from './AppRootNavigator';
import DeckView from './DeckView';

export default class AppDecksNavigator extends Component {
    render() {
        const ListNavigator = StackNavigator({
            deckListView: {
                screen: AppRootNavigator,
                navigationOptions: {
                    header: null
                }
            },
            deckView: {
                screen: DeckView,
                navigationOptions: {
                    headerTintColor: 'black'
                }
            }
        });

        return (
            <ListNavigator />
        );
    }
}

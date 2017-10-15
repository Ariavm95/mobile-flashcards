import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppTabNavigator from './AppTabNavigator';
import DeckView from './DeckView';

export default class AppDecksNavigator extends Component {
    render() {
        const ListNavigator = StackNavigator({
            deckListView: {
                screen: AppTabNavigator,
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

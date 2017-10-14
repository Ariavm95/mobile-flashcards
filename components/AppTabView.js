import React, {Component} from 'react';
import { View, Text } from 'react-native';
import DeckListView from './DeckListView';
import { TabNavigator } from 'react-navigation';
import { FontAwesome} from '@expo/vector-icons';

export default class AppTabView extends Component {
    render() {
        const deckListView = () => (<DeckListView />);
        const newDeck = () => (
            <View>
                <Text>New Deck</Text>
            </View>
        );
        const Tabs = TabNavigator({
            DeckList: {
                screen: deckListView,
                navigationOptions: {
                    tabBarLabel: "Deck List",
                    tabBarIcon: ({ tintColor }) => <FontAwesome name='list' size={30} color={tintColor} />
                }
            },
            NewDeck: {
                screen: newDeck,
                navigationOptions: {
                    tabBarLabel: "New Deck",
                    tabBarIcon: ({ tintColor }) => <FontAwesome name='plus' size={30} color={tintColor} />
                }
            },
        });
        return (
            <Tabs />
        );
    }
}

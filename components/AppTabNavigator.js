import React, {PureComponent} from 'react';
import { View, Text } from 'react-native';
import DeckListView from './DeckListView';
import NewDeckView from './NewDeckView';
import { TabNavigator } from 'react-navigation';
import { FontAwesome} from '@expo/vector-icons';

export default class AppTabNavigator extends PureComponent {
    render() {
        const { navigation } = this.props;
        const deckList = () =>(
            <DeckListView navigation={navigation}/>
        )
        const Tabs = TabNavigator({
            DeckList: {
                screen: deckList,
                navigationOptions: {
                    tabBarLabel: "Deck List",
                    tabBarIcon: ({ tintColor }) => <FontAwesome name='list' size={30} color={tintColor} />
                }
            },
            NewDeck: {
                screen: NewDeckView,
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

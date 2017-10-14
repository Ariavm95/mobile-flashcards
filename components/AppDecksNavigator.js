import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DeckListView from './DeckListView';

export default class AppDecksNavigator extends Component {
    render() {
        const deckListView = ({navigation}) => (
            <DeckListView navigation={navigation}/>
        );

        const deckView = ({navigation}) => (
            <View>
                <Text>Deck View - {JSON.stringify(navigation.state.params.item)}</Text>
            </View>
        );

        const ListNavigator = StackNavigator({
            deckListView: {
                screen: deckListView,
                navigationOptions: {
                    header: null
                }
            },
            deckView: {
                screen: deckView,
                navigationOptions: {
                    headerTintColor: 'black',
                    title: "Deck"
                }
            }
        });

        return (
            <ListNavigator />
        );
    }
}

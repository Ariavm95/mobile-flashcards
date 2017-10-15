import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppTabNavigator from './AppTabNavigator';
import QuizView from './QuizView';
import DeckView from './DeckView';
import NewCardView from './NewCardView';

export default class DeckListNavigator extends Component {
    render() {
        const ListNavigator = StackNavigator({
            deckListView: {
                screen: AppTabNavigator,
                navigationOptions: {
                    header: null
                }
            },
            deckView: {
                screen: DeckView
            },
            quizView: {
                screen: QuizView,
                navigationOptions: {
                    title: "Quiz"
                }
            },
            newCardView: {
                screen: NewCardView,
                navigationOptions: {
                    title: "New Card"
                }
            }
        });

        return (
            <ListNavigator />
        );
    }
}

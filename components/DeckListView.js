import React, {Component} from 'react';
import { View, Text, FlatList } from 'react-native';
import { getDecks } from '../db';

export default class DeckListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decks: []
        }
    }
    
    componentDidMount() {
        const decks = getDecks();
        this.setState({
            decks
        })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.decks}
                    renderItem={({item})=><Text>{item.title}</Text>}
                />
            </View>
        );
    }
}

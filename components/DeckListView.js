import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { getDecks } from '../db';
import DeckListItem from './DeckListItem';

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
        const navigation = this.props.navigation;
        return (
            <FlatList
                style={{ paddingTop: 50 }}
                data={this.state.decks}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <DeckListItem navigation={navigation} item={item}/>
                )}
            />
        );
    }
}

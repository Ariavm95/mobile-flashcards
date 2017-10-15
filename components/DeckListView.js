import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { getDecks } from '../db';
import DeckListItem from './DeckListItem';
import { connect } from 'react-redux';

class DeckListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decks: []
        }
    }

    componentDidMount() {
        getDecks().then( decks => {
            console.log(JSON.stringify(decks))
            this.setState({
                decks
            })
        });
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

export default connect()(DeckListView);

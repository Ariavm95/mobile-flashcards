import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { fetchDecks } from '../actions';
import DeckListItem from './DeckListItem';
import { connect } from 'react-redux';

class DeckListView extends Component {
    componentDidMount() {
        this.props.getDecks();
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <FlatList
                style={{ paddingTop: 20 }}
                data={this.props.decks}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <DeckListItem navigation={navigation} item={item}/>
                )}
            />
        );
    }
}

function mapStateToProps(data) {
    return {
        decks: Object.keys(data).reduce((decks, id) => {
            return decks.concat(data[id]);
        }, [])
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getDecks: () => dispatch(fetchDecks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListView);

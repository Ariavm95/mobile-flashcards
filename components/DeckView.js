import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params.item;
        return {
            title
        }
    }

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Text>Deck View - {JSON.stringify(navigation.state.params.item)}</Text>
            </View>
        );
    }
}

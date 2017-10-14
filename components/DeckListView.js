import React, {Component} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';
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
            <View style={{
                width:200,
                height:100
            }}>
                <FlatList
                    data={this.state.decks}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => (
                        <Card >
                            <CardItem>
                                <Body>
                                    <Text>
                                        {item.title}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
});

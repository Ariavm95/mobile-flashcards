import React, {Component} from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, CardItem, Text, Right, Icon} from 'native-base';
import { getDecks } from '../db';
import { StackNavigator } from 'react-navigation';

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
        const deckListView = ({navigation}) => (
            <FlatList
            style={{ paddingTop: 50 }}
                data={this.state.decks}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('deckView', {item})}>
                        <Card style={{
                            marginLeft:50,
                            marginRight:50,
                            height:60
                        }}>
                            <CardItem style={{
                                flex:1,
                                flexDirection:"row",
                                justifyContent:"space-between",
                                alignItems:"center"}}>
                                <Text>
                                    {item.title}
                                </Text>
                                <Right style={{paddingRight:5}}>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                )}
            />
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

const styles = StyleSheet.create({
});

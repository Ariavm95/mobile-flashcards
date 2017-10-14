import React, {Component} from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { Card, CardItem, Text ,View, Right, Icon} from 'native-base';
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
            <FlatList
                style={{paddingTop:50}}
                data={this.state.decks}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
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
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
});

import React, {Component} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Right, Icon} from 'native-base';

export default class DeckListItem extends Component {
    render() {
        const { item, navigation } = this.props;
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('deckView', {item})}>
                <Card style={{
                    marginLeft:30,
                    marginRight:50,
                    width:300,
                    height:120
                }}>
                    <CardItem style={{
                        flex:1,
                        flexDirection:"row",
                        justifyContent:"space-between",
                        alignItems:"center"}}>
                        <View style={{flex:1}}>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 'bold'
                            }}>
                                {item.title}
                            </Text>
                            <Text>
                                {item.questions.length} cards
                            </Text>
                        </View>
                        <Right style={{paddingRight:5}}>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }
}

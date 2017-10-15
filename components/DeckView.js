import React, {Component} from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

export default class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params.item;
        return {
            title
        }
    }

    render() {
        const { title, questions } = this.props.navigation.state.params.item;
        const cardCount = questions.length;
        const cardCountText = `${cardCount} card${cardCount>1?"s":""}`
        return (
            <View style={{
                flex:1,
                justifyContent: "space-around",
                alignItems:"center"
            }}>
                <View style={{
                    alignItems:"center"
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold'
                    }}>
                        { title }
                    </Text>
                    <Text>
                        { cardCountText }
                    </Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                    <Button bordered style={{ marginRight: 10 }}>
                        <Text>Add Card</Text>
                    </Button>
                    <Button bordered>
                        <Text>Start Quiz</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

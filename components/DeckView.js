import React, {Component} from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { FontAwesome} from '@expo/vector-icons';

class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params;
        return {
            title
        }
    }

    //force refresh when adding a new card and navigate back
    refresh() {
        this.setState({});
    }

    render() {
        const { navigation, questions } = this.props;
        const { title } = navigation.state.params;
        const cardCount = questions.length;
        const cardCountText = `${cardCount} card${cardCount>1?"s":""}`
        const disabledQuizButton = (
            <Button disabled bordered>
                <Text>Start Quiz</Text>
            </Button>
        );
        const quizButton = cardCount === 0
            ? disabledQuizButton
            : (
                <Button
                    onPress={() => navigation.navigate("quizView", {title})}
                    bordered>
                    <Text>Start Quiz</Text>
                </Button>
            )
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
                    <Button
                        onPress={() => navigation.navigate("newCardView", {
                            title,
                            refresh: this.refresh.bind(this)
                        })}
                        bordered style={{ marginRight: 10 }}>
                        <Text>Add Card</Text>
                    </Button>
                    {quizButton}
                </View>
            </View>
        );
    }
}

function mapStateToProps(data, { navigation }) {
    const { title } = navigation.state.params;
    return {
        questions: data[title].questions
    }
}

export default connect(mapStateToProps)(DeckView);

import React, {PureComponent} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {
    DeckSwiper,
    Card,
    CardItem,
    Text,
    Body,
    Button,
    Icon
} from 'native-base';

class QuizView extends PureComponent {

    state= {
        counter:1,
        right:0,
        wrong:0,
        showQuestion: true,
        complete: false
    }

    handleWrong() {
        this.setState((prevState) => {
            const maxLength = this.props.questions.length;
            const complete = prevState.counter ===  maxLength;
            const counter = complete
                ? prevState.counter : prevState.counter + 1;
            return {
                wrong: prevState.wrong +1,
                counter,
                complete,
                showQuestion: true
            };
        });
    }

    handleRight() {
        this.setState((prevState) => {
            const maxLength = this.props.questions.length;
            const complete = prevState.counter ===  maxLength;
            const counter = complete
                ? prevState.counter : prevState.counter + 1;
            return {
                right: prevState.right +1,
                counter,
                complete,
                showQuestion: true
            };
        });
    }

    flipCard() {
        this.setState((prevState) => {
            const showQuestion = !prevState.showQuestion;
            return {
                showQuestion
            }
        })
    }

    renderResult() {
        const { right, wrong } = this.state;
        const score = ((right / (right + wrong)) * 100).toFixed(0);
        return (
            <View style={{
                flex: 1,
                alignItems: "center",
                marginBottom: 200
            }}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>
                    Your Score is {score}
                </Text>
                <Text>
                    Right: {right}
                </Text>
                <Text>
                    Wrong: {wrong}
                </Text>
            </View>
        );
    }

    renderCard(card) {
        const { question, answer } = card;
        const questionText = (
            <View>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>
                    Question
                </Text>
                <Text>
                    {question}
                </Text>
            </View>
        );
        const answerText = (
            <View>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>
                    Answer
                </Text>
                <Text>
                    {answer}
                </Text>
            </View>
        );
        const text = this.state.showQuestion
            ? questionText
            : answerText;

        return (
            <Card style={{
                height: 200,
                marginLeft: 20,
                marginRight: 20
             }}>
                <CardItem>
                    <Body>
                        { text }
                    </Body>
                </CardItem>
            </Card>
        );
    }

    render() {
        const progress = this.state.complete
            ? null
            : (
                <Text style={{textAlign:"center"}}>
                    {this.state.counter}/{this.props.questions.length}
                </Text>
            );
        const actionButtons = this.state.complete
            ? null
            : (
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    padding: 15
                }}>
                    <Button
                        bordered iconLeft danger
                        onPress={() => {
                            this._deckSwiper._root.swipeLeft();
                            this.handleWrong();
                        }}>
                        <Icon name="arrow-back" />
                        <Text>Wrong</Text>
                    </Button>
                    <Button bordered
                        onPress={this.flipCard.bind(this)}>
                        <Text>Flip</Text>
                    </Button>
                    <Button
                        bordered iconRight success
                        onPress={() => {
                            this._deckSwiper._root.swipeRight();
                            this.handleRight();
                        }}>
                        <Text>Right</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </View>
            );
        return (
            <View style={{
                flex: 1,
                justifyContent: 'space-around'
            }}>
                <View>
                    { progress }
                    <DeckSwiper
                        ref={(c) => this._deckSwiper = c}
                        looping={false}
                        dataSource={this.props.questions}
                        onSwipeLeft={this.handleWrong.bind(this)}
                        onSwipeRight={this.handleRight.bind(this)}
                        renderEmpty={this.renderResult.bind(this)}
                        renderItem={this.renderCard.bind(this)}
                    />
                </View>
                {actionButtons}
            </View>
        );
    }
}

function mapStateToProps(data, {navigation}) {
    const { title, restartQuiz } = navigation.state.params;
    return {
        restartQuiz,
        questions: data[title].questions
    }
}

export default connect(mapStateToProps)(QuizView);

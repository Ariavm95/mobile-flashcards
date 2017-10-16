import React, {Component} from 'react';
import {
    View,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import {
    Input,
    Item,
    Text,
    Button
} from 'native-base';
import { addDeck } from '../actions';
import { connect } from 'react-redux';

class NewDeckView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            buttonDisable: true
        }
    }

    setTitle(title) {
        const noTitle = !!!title;
        const hasExistingTitle = this.props.deckList.includes(title);
        const buttonDisable = noTitle || hasExistingTitle;
        this.setState({
            input: title,
            buttonDisable
        })
    }

    createDeck() {
        const { navigation } = this.props;
        Keyboard.dismiss();
        this.props.addDeck(this.state.input).then(() => {
            this.setState({
                input: "",
                buttonDisable: true
            });
            navigation.navigate("DeckList");
        });
    }

    render() {
        const disabledButton = (
            <Button bordered disabled>
                <Text> Submit </Text>
            </Button>
        );
        const submitButton = (
            <Button
                bordered success
                onPress={ this.createDeck.bind(this) }
                >
                <Text> Submit </Text>
            </Button>
        );
        const button = this.state.buttonDisable
            ? disabledButton
            : submitButton;

        return (
            <KeyboardAvoidingView behavior="padding" style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <View>
                    <Text style={{
                        fontSize:25,
                        fontWeight:"bold"
                    }}>
                        What is the title of your new Deck?
                    </Text>
                </View>
                <View>
                    <Item regular style={{
                        marginTop:15,
                        marginBottom:10,
                        width: 300
                    }}>
                        <Input
                            placeholder='Title'
                            onChangeText={ this.setTitle.bind(this) }
                            value={this.state.input} />
                    </Item>
                </View>
                <View>
                    {button}
                </View>
            </KeyboardAvoidingView>
        );
    }
}

function mapStateToProps(data) {
    return {
        deckList: Object.keys(data)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addDeck: (title) => dispatch(addDeck(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);

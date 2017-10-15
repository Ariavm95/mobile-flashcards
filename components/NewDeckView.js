import React, {Component} from 'react';
import { View,  KeyboardAvoidingView, Keyboard } from 'react-native';
import {Input, Item, Text, Button } from 'native-base';
import { saveDeckTitle } from '../db';

export default class NewDeckView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            buttonDisable: true
        }
    }

    setTitle(title) {
        const buttonDisable = !!!title;
        this.setState({
            input: title,
            buttonDisable
        })
    }

    createDeck() {
        const { navigation } = this.props;
        Keyboard.dismiss();
        saveDeckTitle(this.state.input).then(() => {
            this.setState({
                input: "",
                buttonDisable: true
            });
            navigation.navigate("DeckList");
        });
    }

    render() {
        const button = this.state.buttonDisable ?
            (
                <Button bordered disabled>
                    <Text> Submit </Text>
                </Button>
            ) : (
                <Button
                    bordered success
                    onPress={ this.createDeck.bind(this) }
                    >
                    <Text> Submit </Text>
                </Button>
            );

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
